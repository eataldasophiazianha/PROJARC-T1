import { Module } from '@nestjs/common';
import { DatabaseModule } from './persistence/modules/database/database.module';
import { ExceptionsModule } from './persistence/modules/exception/exceptions.module';
import { StockEntryModule } from './persistence/modules/stock-entry/stock-entry.module';

@Module({
  imports: [DatabaseModule, ExceptionsModule, StockEntryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
