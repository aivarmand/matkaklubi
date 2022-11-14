/*
  Warnings:

  - Added the required column `imageUrl` to the `Trek` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Trek` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trek" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL;
