/*
  Warnings:

  - A unique constraint covering the columns `[teamId,secretKey]` on the table `Space` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Space_teamId_secretKey_key" ON "Space"("teamId", "secretKey");
