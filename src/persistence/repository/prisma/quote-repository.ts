import { Injectable } from '@nestjs/common';
import { Quote } from 'src/domain/model/quote';
import { QuoteRepository } from 'src/domain/persistence/quote-repository';
import { PrismaService } from 'src/persistence/config/prisma';
import { QuoteMapper } from 'src/persistence/mappers/quote-mapper';

@Injectable()
export class PrismaQuoteRepository implements QuoteRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByCode(code: string): Promise<Quote | null> {
    const quote = await this.prisma.quote.findUnique({
      where: { code },
    });

    if (!quote) {
      return null;
    }

    return QuoteMapper.toDomain(quote);
  }
  async findAll(): Promise<Quote[]> {
    const quotes = await this.prisma.quote.findMany();

    return quotes.map((quote) => QuoteMapper.toDomain(quote));
  }
  async create(budget: Quote): Promise<Quote> {
    const quote = QuoteMapper.toPersistence(budget);

    const createdQuote = await this.prisma.quote.create({
      data: quote,
    });

    return QuoteMapper.toDomain(createdQuote);
  }
  async findById(id: number): Promise<Quote | null> {
    const quote = await this.prisma.quote.findUnique({
      where: { id },
    });

    if (!quote) {
      return null;
    }

    return QuoteMapper.toDomain(quote);
  }
  async markAsCompleted(id: number): Promise<void> {
    await this.prisma.quote.update({
      where: { id },
      data: { status: 'COMPLETED' },
    });
  }
  async listByPeriod(startDate: Date, endDate: Date): Promise<Quote[]> {
    const quotes = await this.prisma.quote.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    return quotes.map((quote) => QuoteMapper.toDomain(quote));
  }
}
