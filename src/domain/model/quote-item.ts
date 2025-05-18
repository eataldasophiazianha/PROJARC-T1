import { randomInt } from 'node:crypto';
import { Product } from './product';
import { Quote } from './quote';

interface QuoteItemProps {
  quoteId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
  total: number;
  product?: Product;
  quote?: Quote;
}
export class QuoteItem {
  id: number;
  quoteId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
  total: number;
  product?: Product;
  quote?: Quote;

  constructor(quoteItemProps: QuoteItemProps, id: number) {
    this.id = id ?? Math.floor(Math.random() * 1000000);
    this.quoteId = quoteItemProps.quoteId;
    this.productId = quoteItemProps.productId;
    this.quantity = quoteItemProps.quantity;
    this.unitPrice = quoteItemProps.unitPrice;
    this.total = quoteItemProps.total;
    this.product = quoteItemProps.product;
    this.quote = quoteItemProps.quote;
  }

  public getId(): number {
    return this.id;
  }
  public setId(value: number) {
    this.id = value;
  }
  public getQuoteId(): number {
    return this.quoteId;
  }
  public setQuoteId(value: number) {
    this.quoteId = value;
  }
  public getProductId(): number {
    return this.productId;
  }
  public setProductId(value: number) {
    this.productId = value;
  }
  public getQuantity(): number {
    return this.quantity;
  }
  public setQuantity(value: number) {
    this.quantity = value;
  }
  public getUnitPrice(): number {
    return this.unitPrice;
  }
  public setUnitPrice(value: number) {
    this.unitPrice = value;
  }
  public getTotal(): number {
    return this.total;
  }
  public setTotal(value: number) {
    this.total = value;
  }
  public getProduct(): Product | undefined {
    return this.product;
  }
  public setProduct(value: Product | undefined) {
    this.product = value;
  }
  public getQuote(): Quote | undefined {
    return this.quote;
  }
  public setQuote(value: Quote | undefined) {
    this.quote = value;
  }
}
