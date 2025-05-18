import {
  Quote as PrismaQuote,
  QuoteStatus as PrismaQuoteStatus,
} from '@prisma/client';
import { Quote, QuoteStatus } from 'src/domain/model/quote';

export class QuoteMapper {
  static toDomain(quote: PrismaQuote): Quote {
    return new Quote(
      {
        code: quote.code,
        date: quote.date,
        clientName: quote.clientName,
        country: quote.country,
        state: quote.state,
        stateTaxPercent: quote.stateTaxPercent,
        federalTaxPercent: quote.federalTaxPercent,
        stateTaxAmount: quote.stateTaxPercent,
        federalTaxAmount: quote.federalTaxPercent,
        discountPercent: quote.discountPercent,
        discountAmount: quote.discountAmount,
        totalValue: quote.totalValue,
        finalValue: quote.finalValue,
        status: quote.status as QuoteStatus,
        validUntil: quote.validUntil,
      },
      quote.id,
    );
  }

  static toPersistence(quote: Quote): PrismaQuote {
    return {
      id: quote.id,
      code: quote.code,
      date: quote.date,
      clientName: quote.clientName,
      country: quote.country,
      state: quote.state,
      stateTaxPercent: quote.stateTaxPercent,
      federalTaxPercent: quote.federalTaxPercent,
      discountPercent: quote.discountPercent,
      discountAmount: quote.discountAmount,
      totalValue: quote.totalValue,
      finalValue: quote.finalValue,
      status: quote.status as PrismaQuoteStatus,
      validUntil: quote.validUntil,
    };
  }
}
