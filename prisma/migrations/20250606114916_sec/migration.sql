/*
  Warnings:

  - You are about to drop the column `userId` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `postedById` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[jobId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_userId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_postedById_fkey";

-- DropIndex
DROP INDEX "Application_userId_jobId_key";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "postedById";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";

-- CreateIndex
CREATE UNIQUE INDEX "Application_jobId_key" ON "Application"("jobId");
