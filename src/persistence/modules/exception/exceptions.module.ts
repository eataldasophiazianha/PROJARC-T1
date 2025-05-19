import { Module } from '@nestjs/common';
import { ExceptionsAdapter } from 'src/domain/adapters/exceptions.adapter';
import { ExceptionsIntegration } from 'src/persistence/integrations/exceptions';
@Module({
  providers: [{ provide: ExceptionsAdapter, useClass: ExceptionsIntegration }],
  exports: [{ provide: ExceptionsAdapter, useClass: ExceptionsIntegration }],
})
export class ExceptionsModule {}
