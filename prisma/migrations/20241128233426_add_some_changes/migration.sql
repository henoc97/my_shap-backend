/*
  Warnings:

  - You are about to drop the column `receiverId` on the `Transfer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Transfer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[contact]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[contact,countryCode]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Transfer" DROP CONSTRAINT "Transfer_receiverId_fkey";

-- AlterTable
ALTER TABLE "Transfer" DROP COLUMN "receiverId",
ADD COLUMN     "contact" TEXT,
ADD COLUMN     "countryCode" TEXT NOT NULL DEFAULT '228';

-- CreateIndex
CREATE UNIQUE INDEX "Transfer_code_key" ON "Transfer"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User_contact_key" ON "User"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "User_contact_countryCode_key" ON "User"("contact", "countryCode");

-- AddForeignKey
ALTER TABLE "Transfer" ADD CONSTRAINT "Transfer_contact_countryCode_fkey" FOREIGN KEY ("contact", "countryCode") REFERENCES "User"("contact", "countryCode") ON DELETE RESTRICT ON UPDATE CASCADE;
