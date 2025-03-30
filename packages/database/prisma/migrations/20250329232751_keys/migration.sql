/*
  Warnings:

  - A unique constraint covering the columns `[secretKey]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[inviteCode]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[secretKey]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "secretKey" TEXT;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "inviteCode" TEXT,
ADD COLUMN     "secretKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Space_secretKey_key" ON "Space"("secretKey");

-- CreateIndex
CREATE UNIQUE INDEX "Team_inviteCode_key" ON "Team"("inviteCode");

-- CreateIndex
CREATE UNIQUE INDEX "Team_secretKey_key" ON "Team"("secretKey");
