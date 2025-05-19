import { Injectable } from '@nestjs/common';
import { ExceptionsAdapter } from 'src/domain/adapters/exceptions.adapter';
import { StockProvider } from '../providers/stock';
import { ProductRepository } from 'src/domain/persistence/product-repository';

@Injectable()
export class ProductsUseCase {
  constructor(
    private readonly exceptionsAdapter: ExceptionsAdapter,
    private readonly stockProvider: StockProvider,
    private readonly productsRepository: ProductRepository,
  ) {}

  async list_products_stock() {
    const products = await this.productsRepository.findAll();

    if (!products || products.length === 0) {
      return this.exceptionsAdapter.notFound({
        message: 'No products found',
      });
    }

    const productsWithStock = await Promise.all(
      products.map(async (product) => {
        const stock = await this.stockProvider.get_stock_by_product_id(
          product.id,
        );
        return {
          code: product.code,
          description: product.description,
          quantity: stock,
        };
      }),
    );

    return productsWithStock;
  }

  async get_products_by_code(code: [string]) {
    const products = await this.productsRepository.findAll();

    if (!products || products.length === 0) {
      return this.exceptionsAdapter.notFound({
        message: 'No products found',
      });
    }
    const filteredProducts = products.filter((product) =>
      code.includes(product.code),
    );
    const productsWithStock = await Promise.all(
      filteredProducts.map(async (product) => {
        const stock = await this.stockProvider.get_stock_by_product_id(
          product.id,
        );
        return {
          code: product.code,
          description: product.description,
          quantity: stock,
        };
      }),
    );

    if (!productsWithStock || productsWithStock.length === 0) {
      return this.exceptionsAdapter.notFound({
        message: 'No products found',
      });
    }
    return productsWithStock;
  }

  async get_all_products() {
    const products = await this.productsRepository.findAll();

    if (!products || products.length === 0) {
      return this.exceptionsAdapter.notFound({
        message: 'No products found',
      });
    }

    return products;
  }
}
