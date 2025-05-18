import { Injectable } from '@nestjs/common';
import { Quote } from 'src/domain/model/quote';
import { QuoteRepository } from 'src/domain/persistence/quote-repository';
import { PrismaService } from 'src/persistence/config/prisma';

@Injectable()
export class PrismaQuoteRepository implements QuoteRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByCode(code: string): Promise<Quote | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Quote[]> {
    throw new Error('Method not implemented.');
  }
  create(budget: Quote): Promise<Quote> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Promise<Quote | null> {
    throw new Error('Method not implemented.');
  }
  markAsCompleted(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  listByPeriod(startDate: Date, endDate: Date): Promise<Quote[]> {
    throw new Error('Method not implemented.');
  }
}
