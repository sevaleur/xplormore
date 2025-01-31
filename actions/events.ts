"use server";

import randomName from "@scaleway/random-name";

import { revalidateTag } from "next/cache";
import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";

export const createNewEvent = async () => {
  const user = await currentUser();

  await prisma.event.create({
    data: {
      startOn: new Date().toUTCString(),
      createdBy: user.id,
      isPrivate: false,
      name: randomName("event", " "),
    },
  });

  revalidateTag("events");
  revalidateTag("dashboard:events");
};
