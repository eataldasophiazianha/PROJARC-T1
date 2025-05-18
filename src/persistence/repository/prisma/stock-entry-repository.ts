import { Injectable } from '@nestjs/common';
import { StockEntry } from 'src/domain/model/stock-entry';
import { StockEntryRepository } from 'src/domain/persistence/stock-entry-repository';
import { PrismaService } from 'src/persistence/config/prisma';

@Injectable()
export class PrismaStockEntryRepository implements StockEntryRepository {
  constructor(private readonly prisma: PrismaService) {}
  add_entry(stockEntry: StockEntry): Promise<StockEntry> {
    throw new Error('Method not implemented.');
  }

  async findById(id: number): Promise<StockEntry | null> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<StockEntry[]> {
    throw new Error('Method not implemented.');
  }

  async create(stockEntry: StockEntry): Promise<StockEntry> {
    throw new Error('Method not implemented.');
  }

  async update(id: number, stockEntry: StockEntry): Promise<StockEntry> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
