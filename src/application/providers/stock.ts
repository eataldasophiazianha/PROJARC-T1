import { Injectable } from '@nestjs/common';
import { ExceptionsAdapter } from 'src/domain/adapters/exceptions.adapter';
import { StockRepository } from 'src/domain/persistence/stock-repository';

@Injectable()
export class StockProvider {
  constructor(
    private readonly exceptionsAdapter: ExceptionsAdapter,
    private readonly stockRepository: StockRepository,
  ) {}

  async get_stock_by_product_id(productId: number): Promise<number | void> {
    const stock = await this.stockRepository.findByProductId(productId);

    if (!stock) {
      return this.exceptionsAdapter.notFound({
        message: 'Stock not found for the given product ID',
      });
    }
    return stock.currentQuantity;
  }
}
