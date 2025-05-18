import { Product } from './product';
import { Quote } from './quote';

export class QuoteItem {
  id: number;
  quoteId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
  total: number;
  product?: Product;
  quote?: Quote;

  constructor(
    id: number,
    quoteId: number,
    productId: number,
    quantity: number,
    unitPrice: number,
    total: number,
    product?: Product,
    quote?: Quote,
  ) {
    this.id = id;
    this.quoteId = quoteId;
    this.productId = productId;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.total = total;
    this.product = product;
    this.quote = quote;
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
