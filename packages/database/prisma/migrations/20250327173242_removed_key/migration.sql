/*
  Warnings:

  - You are about to drop the column `key` on the `Space` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Space_key_key";

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "key";
