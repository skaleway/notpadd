/*
  Warnings:

  - A unique constraint covering the columns `[GithubFinedGrainedToken]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[githubUsername]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[githubRepository]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[DeployedProjectUrl]` on the table `Space` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "DeployedProjectUrl" TEXT,
ADD COLUMN     "GithubFinedGrainedToken" TEXT,
ADD COLUMN     "githubRepository" TEXT,
ADD COLUMN     "githubUsername" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Space_GithubFinedGrainedToken_key" ON "Space"("GithubFinedGrainedToken");

-- CreateIndex
CREATE UNIQUE INDEX "Space_githubUsername_key" ON "Space"("githubUsername");

-- CreateIndex
CREATE UNIQUE INDEX "Space_githubRepository_key" ON "Space"("githubRepository");

-- CreateIndex
CREATE UNIQUE INDEX "Space_DeployedProjectUrl_key" ON "Space"("DeployedProjectUrl");
