/*
  Warnings:

  - Made the column `contact` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "contact" SET NOT NULL;
