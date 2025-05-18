import { Injectable } from '@nestjs/common';
import { StockEntry } from 'src/domain/model/stock-entry';
import { StockEntryRepository } from 'src/domain/persistence/stock-entry-repository';
import { PrismaService } from 'src/persistence/config/prisma';
import { StockEntryMapper } from 'src/persistence/mappers/stock-entry-mapper';

@Injectable()
export class PrismaStockEntryRepository implements StockEntryRepository {
  constructor(private readonly prisma: PrismaService) {}
  async add_entry(stockEntry: StockEntry): Promise<void> {
    const data = StockEntryMapper.toPersistence(stockEntry);

    const createdStockEntry = await this.prisma.stockEntry.create({
      data,
    });
  }

  async findById(id: number): Promise<StockEntry | null> {
    const stockEntry = await this.prisma.stockEntry.findUnique({
      where: { id },
      include: { stock: true },
    });

    if (!stockEntry) {
      return null;
    }

    return StockEntryMapper.toDomain(stockEntry);
  }

  async findAll(): Promise<StockEntry[]> {
    const stockEntries = await this.prisma.stockEntry.findMany({
      include: { stock: true },
    });

    return stockEntries.map((stockEntry) =>
      StockEntryMapper.toDomain(stockEntry),
    );
  }
}
