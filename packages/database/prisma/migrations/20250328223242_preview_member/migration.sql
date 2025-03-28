/*
  Warnings:

  - Added the required column `memberId` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "memberId" TEXT NOT NULL,
ADD COLUMN     "previewImage" TEXT;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
