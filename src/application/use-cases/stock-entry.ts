import { Injectable } from '@nestjs/common';
import { ExceptionsAdapter } from 'src/domain/adapters/exceptions.adapter';
import { StockEntry } from 'src/domain/model/stock-entry';
import { StockEntryRepository } from 'src/domain/persistence/stock-entry-repository';
import { StockRepository } from 'src/domain/persistence/stock-repository';
import { StockEntryMapper } from 'src/persistence/mappers/stock-entry-mapper';

@Injectable()
export class StockEntryUseCase {
  constructor(
    private readonly entryRepository: StockEntryRepository,
    private readonly stockRepository: StockRepository,
    private readonly exceptionsAdapter: ExceptionsAdapter,
  ) {}

  async register_entry(productId: number, quantity: number) {
    const stock = await this.stockRepository.findByProductId(productId);

    if (!stock) {
      return this.exceptionsAdapter.notFound({
        message: 'Stock not found for the given product ID',
      });
    }

    if (stock.currentQuantity + quantity > stock.maxQuantity) {
      return this.exceptionsAdapter.badRequest({
        message: 'Stock quantity exceeds maximum limit',
      });
    }

    await this.stockRepository.increaseStock(stock.id, quantity);

    const stockEntry = new StockEntry({
      productId: productId,
      quantity: quantity,
      stockId: stock.id,
      entryDate: new Date(),
    });
    await this.entryRepository.add_entry(stockEntry);
  }
}
