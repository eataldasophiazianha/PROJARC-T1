import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['error', 'info'],
    });
  }

  async onModuleInit() {
    await this.$connect();
    const shouldCreate = await this.product.findMany();
    if (shouldCreate.length > 0) {
      return;
    }
    const products = await this.product.createMany({
      data: [
        {
          code: 'P001',
          description: 'Product 1',
          price: 10.0,
        },
        {
          code: 'P002',
          description: 'Product 2',
          price: 20.0,
        },

        {
          code: 'P003',
          description: 'Product 3',
          price: 30.0,
        },
        {
          code: 'P004',
          description: 'Product 4',
          price: 40.0,
        },
        {
          code: 'P005',
          description: 'Product 5',
          price: 50.0,
        },
      ],
    });
    await this.stock.createMany({
      data: [
        {
          productId: 1,
          minQuantity: 5,
          maxQuantity: 20,
          currentQuantity: 10,
        },
        {
          productId: 2,
          minQuantity: 3,
          maxQuantity: 15,
          currentQuantity: 8,
        },
        {
          productId: 3,
          minQuantity: 2,
          maxQuantity: 10,
          currentQuantity: 5,
        },
        {
          productId: 4,
          minQuantity: 1,
          maxQuantity: 8,
          currentQuantity: 3,
        },
        {
          productId: 5,
          minQuantity: 0,
          maxQuantity: 5,
          currentQuantity: 2,
        },
      ],
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
