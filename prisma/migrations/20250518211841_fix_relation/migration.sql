/*
  Warnings:

  - You are about to drop the column `productId` on the `Stock` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Stock_productId_key";

-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "productId";
