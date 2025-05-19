import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ExceptionsModule } from '../exception/exceptions.module';
import { StockEntryUseCase } from 'src/application/use-cases/stock-entry';
import { StockModule } from '../stock/stock.module';

@Module({
  imports: [DatabaseModule, ExceptionsModule],
  controllers: [],
  providers: [StockEntryUseCase],
  exports: [StockEntryUseCase],
})
export class StockEntryModule {}
