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
    return this.prisma.stockEntry.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<StockEntry[]> {
    return this.prisma.stockEntry.findMany();
  }

  async create(stockEntry: StockEntry): Promise<StockEntry> {
    return this.prisma.stockEntry.create({
      data: stockEntry,
    });
  }

  async update(id: number, stockEntry: StockEntry): Promise<StockEntry> {
    return this.prisma.stockEntry.update({
      where: { id },
      data: stockEntry,
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.stockEntry.delete({
      where: { id },
    });
  }
}
