/*
  Warnings:

  - Made the column `updatedAt` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "products" ALTER COLUMN "updatedAt" SET NOT NULL;
