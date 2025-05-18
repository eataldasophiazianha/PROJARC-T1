/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `Stock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "productId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Stock_productId_key" ON "Stock"("productId");
