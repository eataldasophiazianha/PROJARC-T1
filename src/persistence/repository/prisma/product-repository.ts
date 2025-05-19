import { Injectable } from '@nestjs/common';
import { Product } from 'src/domain/model/product';
import { Stock } from 'src/domain/model/stock';
import { ProductRepository } from 'src/domain/persistence/product-repository';
import { PrismaService } from 'src/persistence/config/prisma';
import { ProductMapper } from 'src/persistence/mappers/product-mapper';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { stock: true },
    });

    if (!product) {
      return null;
    }

    if (!product.stock) {
      return null;
    }
    const stock = new Stock(
      {
        productId: product.stock.productId,
        minQuantity: product.stock.minQuantity,
        maxQuantity: product.stock.maxQuantity,
        currentQuantity: product.stock.currentQuantity,
        updatedAt: product.stock.updatedAt,
      },
      product.stock.id,
    );

    const productWithStock = {
      ...product,
      stock,
    };

    return ProductMapper.toDomain(productWithStock);
  }
  async findByCode(code: string): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: { code },
      include: { stock: true },
    });

    if (!product) {
      return null;
    }
    if (!product.stock) {
      return null;
    }
    const stock = new Stock(
      {
        productId: product.stock.productId,
        minQuantity: product.stock.minQuantity,
        maxQuantity: product.stock.maxQuantity,
        currentQuantity: product.stock.currentQuantity,
        updatedAt: product.stock.updatedAt,
      },
      product.stock.id,
    );

    const productWithStock = {
      ...product,
      stock,
    };

    return ProductMapper.toDomain(productWithStock);
  }
  async save(product: Product): Promise<void> {
    const productData = ProductMapper.toPersistence(product);

    await this.prisma.product.create({
      data: {
        code: productData.code,
        description: productData.description,
        price: productData.price,
      },
    });
  }

  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      include: { stock: true },
    });
    console.log('products', products);
    if (products.length === 0) {
      return [];
    }

    const productsWithStock = products.map((product) => {
      if (!product.stock) {
        return ProductMapper.toDomain({
          ...product,
          stock: undefined,
        });
      }
      const stock = new Stock({
        productId: product.stock.productId,
        minQuantity: product.stock.minQuantity,
        maxQuantity: product.stock.maxQuantity,
        currentQuantity: product.stock.currentQuantity,
        updatedAt: product.stock.updatedAt,
      });
      const productWithStock = {
        ...product,
        stock,
      };
      return ProductMapper.toDomain(productWithStock);
    });
    console.log('productWithStock', productsWithStock);

    return productsWithStock;
  }
  async getById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { stock: true },
    });

    if (!product) {
      return null;
    }

    if (product.stock) {
      const stock = new Stock(
        {
          productId: product.stock.productId,
          minQuantity: product.stock.minQuantity,
          maxQuantity: product.stock.maxQuantity,
          currentQuantity: product.stock.currentQuantity,
          updatedAt: product.stock.updatedAt,
        },
        product.stock.id,
      );
      const productWithStock = {
        ...product,
        stock,
      };
      console.log('productWithStock', productWithStock);
      return ProductMapper.toDomain(productWithStock);
    }

    return ProductMapper.toDomain({
      ...product,
      stock: undefined,
    });
  }
}
