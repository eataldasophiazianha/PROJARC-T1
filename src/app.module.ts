import { Module } from '@nestjs/common';
import { DatabaseModule } from './persistence/modules/database/database.module';
import { ExceptionsModule } from './persistence/modules/exception/exceptions.module';
import { StockEntryModule } from './persistence/modules/stock-entry/stock-entry.module';
import { ProductsModule } from './persistence/modules/products/products.module';
import { StockModule } from './persistence/modules/stock/stock.module';

@Module({
  imports: [
    DatabaseModule,
    ExceptionsModule,
    StockEntryModule,
    StockModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
