"use server";

import randomName from "@scaleway/random-name";

import { revalidateTag } from "next/cache";
import { prisma } from "@/utils/db";
import { getUserByClerkID } from "@/utils/auth";
import { delay } from "@/utils/delay";

export const createNewEvent = async () => {
  await delay(1000);

  const user = await getUserByClerkID();

  await prisma.event.create({
    data: {
      startOn: new Date().toISOString(),
      createdBy: user.id,
      isPrivate: false,
      description: "",
      streetNumber: 0,
      street: "",
      zip: 0,
      bldg: "",
      name: randomName("event", " "),
    },
  });

  revalidateTag("events");
  revalidateTag("dashboard:events");
};
