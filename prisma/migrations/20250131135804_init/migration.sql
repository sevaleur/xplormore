-- CreateEnum
CREATE TYPE "Status" AS ENUM ('draft', 'live', 'started', 'ended', 'canceled');

-- CreateEnum
CREATE TYPE "Rsvp" AS ENUM ('going', 'not_going', 'maybe');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startOn" DATE NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "streetNumber" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "zip" INTEGER NOT NULL,
    "bldg" TEXT NOT NULL,
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,
    "status" "Status" NOT NULL DEFAULT 'draft',

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendees" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Attendees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rsvps" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendeeId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "rsvp" "Rsvp" NOT NULL DEFAULT 'going',

    CONSTRAINT "Rsvps_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Event_createdBy_id_key" ON "Event"("createdBy", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Attendees_email_key" ON "Attendees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Rsvps_attendeeId_id_key" ON "Rsvps"("attendeeId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Rsvps_eventId_id_key" ON "Rsvps"("eventId", "id");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rsvps" ADD CONSTRAINT "Rsvps_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "Attendees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rsvps" ADD CONSTRAINT "Rsvps_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
