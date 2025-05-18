import { QuoteItem as PrismaQuoteItem } from '@prisma/client';
import { QuoteItem } from 'src/domain/model/quote-item';

export class QuoteItemMapper {
  static toDomain(quoteItem: PrismaQuoteItem): QuoteItem {
    return new QuoteItem(
      {
        productId: quoteItem.productId,
        quantity: quoteItem.quantity,
        quoteId: quoteItem.quoteId,
        total: quoteItem.total,
        unitPrice: quoteItem.unitPrice,
      },
      quoteItem.id,
    );
  }

  static toPersistence(quoteItem: QuoteItem): PrismaQuoteItem {
    return {
      id: quoteItem.id,
      productId: quoteItem.productId,
      quantity: quoteItem.quantity,
      quoteId: quoteItem.quoteId,
      total: quoteItem.total,
      unitPrice: quoteItem.unitPrice,
    };
  }
}
