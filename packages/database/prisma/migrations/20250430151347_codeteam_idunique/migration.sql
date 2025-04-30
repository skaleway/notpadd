/*
  Warnings:

  - A unique constraint covering the columns `[teamId,code]` on the table `Invite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Invite_teamId_code_key" ON "Invite"("teamId", "code");
