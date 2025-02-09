"use server";

import { ChatOpenAI } from "@langchain/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { z } from "zod";
import { getTrip } from "@/app/_actions/trips";

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

export const generateItineraryIdeas = async (id) => {
  const content = await getTrip(id);

  const llm = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-4o-mini",
    apiKey: process.env.OPENAI_API_KEY,
  });

  const chain = RunnableSequence.from([
    ChatPromptTemplate.fromTemplate(
      `You are an Itinerary creator. You must find 7 local hidden gems for itinerary items that combined does not exceed the specified budget, but fits the travel-style and pace. Use the specified start date and end date to find hidden gems within that time-span and they must be time-of-the-year appropriate hidden gems. All items you create MUST be hidden gems and not very touristy. Follow these strict format instructions exactly: {format_instructions} User input: {entry}`
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
