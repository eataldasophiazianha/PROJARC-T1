import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ExceptionsModule } from '../exception/exceptions.module';
import { StockProvider } from 'src/application/providers/stock';
import { StockController } from 'src/persistence/controllers/stock.controller';
import { StockEntryModule } from '../stock-entry/stock-entry.module';

@Module({
  imports: [DatabaseModule, ExceptionsModule, StockEntryModule],
  controllers: [StockController],
  providers: [StockProvider],
  exports: [StockProvider],
})
export class StockModule {}
