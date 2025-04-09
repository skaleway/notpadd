/*
  Warnings:

  - You are about to drop the column `GithubFinedGrainedToken` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `githubRepository` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `githubUsername` on the `Space` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ghFinedGrainedToken]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ghUsername]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ghRepository]` on the table `Space` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Space_GithubFinedGrainedToken_key";

-- DropIndex
DROP INDEX "Space_githubRepository_key";

-- DropIndex
DROP INDEX "Space_githubUsername_key";

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "GithubFinedGrainedToken",
DROP COLUMN "githubRepository",
DROP COLUMN "githubUsername",
ADD COLUMN     "ghFinedGrainedToken" TEXT,
ADD COLUMN     "ghRepository" TEXT,
ADD COLUMN     "ghUsername" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Space_ghFinedGrainedToken_key" ON "Space"("ghFinedGrainedToken");

-- CreateIndex
CREATE UNIQUE INDEX "Space_ghUsername_key" ON "Space"("ghUsername");

-- CreateIndex
CREATE UNIQUE INDEX "Space_ghRepository_key" ON "Space"("ghRepository");
