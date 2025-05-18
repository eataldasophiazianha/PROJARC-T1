import { Stock as PrismaStock } from '@prisma/client';
import { Stock } from 'src/domain/model/stock';

export class StockMapper {
  static toDomain(stock: PrismaStock): Stock {
    return new Stock(
      {
        productId: stock.productId,
        minQuantity: stock.minQuantity,
        maxQuantity: stock.maxQuantity,
        currentQuantity: stock.currentQuantity,
        updatedAt: stock.updatedAt,
      },
      stock.id,
    );
  }

  static toPersistence(stock: Stock): PrismaStock {
    return {
      id: stock.id,
      productId: stock.productId,
      minQuantity: stock.minQuantity,
      maxQuantity: stock.maxQuantity,
      currentQuantity: stock.currentQuantity,
      updatedAt: stock.updatedAt,
    };
  }
}
