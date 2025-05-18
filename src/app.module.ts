import { Module } from '@nestjs/common';
import { DatabaseModule } from './persistence/modules/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
