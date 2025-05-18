import { StockEntry } from 'src/domain/model/stock-entry';
import { StockEntry as PrismaStockEntry, Stock } from '@prisma/client';

type PrismaStockEntryWithStock = PrismaStockEntry & { stock: Stock };

export class StockEntryMapper {
  static toDomain(stockEntry: PrismaStockEntryWithStock): StockEntry {
    return new StockEntry(
      {
        productId: stockEntry.stock.productId,
        quantity: stockEntry.quantity,
        entryDate: stockEntry.entryDate,
        stockId: stockEntry.stockId,
      },
      stockEntry.id,
    );
  }

  static toPersistence(stockEntry: StockEntry): PrismaStockEntry {
    return {
      id: stockEntry.id,
      entryDate: stockEntry.entryDate,
      quantity: stockEntry.quantity,
      stockId: stockEntry.stockId,
    };
  }
}
