import { Product as PrismaProduct } from '@prisma/client';
import { Product } from 'src/domain/model/product';
import { Stock } from 'src/domain/model/stock';

type PrismaProductWithStock = PrismaProduct & { stock: Stock };

export class ProductMapper {
  static toDomain(product: PrismaProductWithStock): Product {
    return new Product(
      {
        code: product.code,
        description: product.description,
        price: product.price,
        stock: new Stock(
          {
            productId: product.stock.productId,
            minQuantity: product.stock.minQuantity,
            maxQuantity: product.stock.maxQuantity,
            currentQuantity: product.stock.currentQuantity,
            updatedAt: product.stock.updatedAt,
          },
          product.stock.id,
        ),
      },
      product.id,
    );
  }

  static toPersistence(product: Product): PrismaProduct {
    return {
      id: product.id,
      code: product.code,
      description: product.description,
      price: product.price,
      stockId: product.stock?.id ?? 1,
    };
  }
}
