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
    return stock ? stock.quantity : 0;
  }

  async decreaseStock(id: number, quantity: number): Promise<void> {
    await this.prisma.stock.update({
      where: { id },
      data: { quantity: { decrement: quantity } },
    });
  }

  async increaseStock(id: number, quantity: number): Promise<void> {
    await this.prisma.stock.update({
      where: { id },
      data: { quantity: { increment: quantity } },
    });
  }
}
