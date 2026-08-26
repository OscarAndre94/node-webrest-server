/*
  Warnings:

  - You are about to alter the column `text` on the `todo` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "todo" ALTER COLUMN "text" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "completedAt" DROP NOT NULL;
