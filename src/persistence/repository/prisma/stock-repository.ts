import { Injectable } from '@nestjs/common';
import { StockRepository } from 'src/domain/persistence/stock-repository';
import { PrismaService } from 'src/persistence/config/prisma';

@Injectable()
export class PrismaStockRepository implements StockRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getStockQuantity(id: number): Promise<number> {
    const stock = await this.prisma.stock.findUnique({
      where: { id },
    });

    if (!stock) {
      throw new Error('Stock not found');
    }

    return stock.currentQuantity;
  }

  async decreaseStock(id: number, quantity: number): Promise<void> {
    const stock = await this.prisma.stock.findUnique({
      where: { id },
    });

    if (!stock) {
      throw new Error('Stock not found');
    }

    if (stock.currentQuantity < quantity) {
      throw new Error('Insufficient stock');
    }

    await this.prisma.stock.update({
      where: { id },
      data: { currentQuantity: { decrement: quantity } },
    });
  }

  async increaseStock(id: number, quantity: number): Promise<void> {
    await this.prisma.stock.update({
      where: { id },
      data: { currentQuantity: { increment: quantity } },
    });
  }
}
