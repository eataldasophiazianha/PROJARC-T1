import { Injectable } from '@nestjs/common';
import { ExceptionsAdapter } from 'src/domain/adapters/exceptions.adapter';
import { QuoteRepository } from 'src/domain/persistence/quote-repository';

@Injectable()
export class QuoteUseCase {
  constructor(
    private readonly exceptionsAdapter: ExceptionsAdapter,
    private readonly quoteRepository: QuoteRepository,
  ) {}
}
