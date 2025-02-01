import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { delay } from "@/utils/delay";

export const getAttendeesCountForDashboard = async () => {
  await delay(1000);

  const user = await getUserByClerkID();

  await prisma.attendees.findMany({
    where: {},
  });
};
