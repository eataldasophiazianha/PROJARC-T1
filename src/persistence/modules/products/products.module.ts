import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ExceptionsModule } from '../exception/exceptions.module';
import { ProductController } from 'src/persistence/controllers/product.controller';
import { ProductsUseCase } from 'src/application/use-cases/product';
import { StockModule } from '../stock/stock.module';
import { StockEntryModule } from '../stock-entry/stock-entry.module';
import { StockProvider } from 'src/application/providers/stock';

@Module({
  imports: [DatabaseModule, ExceptionsModule, StockModule],
  controllers: [ProductController],
  providers: [ProductsUseCase],
  exports: [],
})
export class ProductsModule {}
