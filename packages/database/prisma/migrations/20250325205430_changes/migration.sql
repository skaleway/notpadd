/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[key]` on the table `Space` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `Space` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Space` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('Free', 'Basic', 'Premium', 'Enterprise');

-- AlterEnum
ALTER TYPE "MemberRole" ADD VALUE 'Moderator';

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_spaceId_fkey";

-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "articlecount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "key" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accounttype" "AccountType" NOT NULL DEFAULT 'Free';

-- DropTable
DROP TABLE "Project";

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "ProjectStatus" NOT NULL DEFAULT 'Draft',
    "content" JSONB,
    "spaceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthorizedAccessCredentials" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "spaceId" TEXT NOT NULL,
    "next_notpadd_userId" TEXT NOT NULL,
    "next_notpadd_spaceId" TEXT NOT NULL,
    "secretkey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuthorizedAccessCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "interval" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");

-- CreateIndex
CREATE INDEX "Article_spaceId_idx" ON "Article"("spaceId");

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_spaceId_key" ON "Article"("slug", "spaceId");

-- CreateIndex
CREATE UNIQUE INDEX "AuthorizedAccessCredentials_id_key" ON "AuthorizedAccessCredentials"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AuthorizedAccessCredentials_next_notpadd_spaceId_key" ON "AuthorizedAccessCredentials"("next_notpadd_spaceId");

-- CreateIndex
CREATE UNIQUE INDEX "Space_key_key" ON "Space"("key");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Space" ADD CONSTRAINT "Space_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorizedAccessCredentials" ADD CONSTRAINT "AuthorizedAccessCredentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorizedAccessCredentials" ADD CONSTRAINT "AuthorizedAccessCredentials_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE CASCADE ON UPDATE CASCADE;
