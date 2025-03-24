/*
  Warnings:

  - The `role` column on the `Member` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "MemberRole" AS ENUM ('Owner', 'Member', 'Editor');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Admin', 'User');

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "role",
ADD COLUMN     "role" "MemberRole" NOT NULL DEFAULT 'Member';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'User';

-- DropEnum
DROP TYPE "Role";
