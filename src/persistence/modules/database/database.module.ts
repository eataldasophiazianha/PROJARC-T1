import { Module } from '@nestjs/common';
import { ProductRepository } from 'src/domain/persistence/product-repository';
import { QuoteRepository } from 'src/domain/persistence/quote-repository';
import { StockRepository } from 'src/domain/persistence/stock-repository';
import { PrismaService } from 'src/persistence/config/prisma';
import { PrismaProductRepository } from 'src/persistence/repository/prisma/product-repository';
import { PrismaQuoteRepository } from 'src/persistence/repository/prisma/quote-repository';
import { PrismaStockRepository } from 'src/persistence/repository/prisma/stock-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
    {
      provide: QuoteRepository,
      useClass: PrismaQuoteRepository,
    },
    {
      provide: StockRepository,
      useClass: PrismaStockRepository,
    },
  ],
  exports: [ProductRepository, QuoteRepository, StockRepository],
})
export class DatabaseModule {}
