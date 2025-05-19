-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_stockId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "stockId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
