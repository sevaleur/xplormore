"use server";

import { ChatOpenAI } from "@langchain/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { z } from "zod";
import { getLatestTrip } from "@/app/_actions/trips";

const itineraryParser = StructuredOutputParser.fromZodSchema(
  z.array(
    z.object({
      title: z.string().describe("the title of the the itinerary item.."),
      type: z.string().describe("the type of the itinerary item."),
      price: z
        .number()
        .describe("the price of the itinerary item, in US Dollars."),
      duration: z.string().describe("the duration of the itinerary item."),
      date: z
        .union([
          z.preprocess(
            (val) => (val === "flexible" ? val : new Date(val)),
            z.date()
          ),
          z.literal("flexible"),
        ])
        .describe(
          'if the itinerary item has a specified date - Like a concert or theatre performance, provide it here, if not use "flexible".'
        ),
      address: z
        .string()
        .describe("the precise adress of the itinerary item. "),
    })
  )
);

export const generateItineraryIdeas = async () => {
  const content = await getLatestTrip();

  const llm = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-4o-mini",
    apiKey: process.env.OPENAI_API_KEY,
  });

  const chain = RunnableSequence.from([
    ChatPromptTemplate.fromTemplate(
      `You are an Itinerary creator. You must create 7 itinerary items that combined does not exceed the specified budget, but fits the travel-style and pace from the following categories - events, restaurants, attractions, activities, hidden gems. Use the specified start date and end date to find events and activities within that time-span and they must be time-of-the-year appropriate (Example - You dont go swimming in the winter, but you do in the summer). If mustSee is not equal to null, then you must create an item for every value in the mustSee field, if it is equal to null, then ignore the mustSee field. Follow these strict format instructions exactly: {format_instructions} User input: {entry}`
    ),
    llm,
    itineraryParser,
  ]);

  const response = await chain.invoke({
    entry: content,
    format_instructions: itineraryParser.getFormatInstructions(),
  });

  return response;
};
