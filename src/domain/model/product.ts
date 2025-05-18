import { QuoteItem } from './quote-item';
import { Stock } from './stock';

export class Product {
  id: number;
  code: string;
  description: string;
  price: number;
  stock?: Stock;
  quoteItems?: QuoteItem[];

  constructor(
    id: number,
    code: string,
    description: string,
    price: number,
    stock?: Stock,
    quoteItems?: QuoteItem[],
  ) {
    this.id = id;
    this.code = code;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.quoteItems = quoteItems;
  }

  public getId(): number {
    return this.id;
  }
  public setId(value: number) {
    this.id = value;
  }
  public getCode(): string {
    return this.code;
  }
  public setCode(value: string) {
    this.code = value;
  }
  public getDescription(): string {
    return this.description;
  }
  public setDescription(value: string) {
    this.description = value;
  }
  public getPrice(): number {
    return this.price;
  }
  public setPrice(value: number) {
    this.price = value;
  }
  public getStock(): Stock | undefined {
    return this.stock;
  }
  public setStock(value: Stock | undefined) {
    this.stock = value;
  }
  public getQuoteItems(): QuoteItem[] | undefined {
    return this.quoteItems;
  }
  public setQuoteItems(value: QuoteItem[] | undefined) {
    this.quoteItems = value;
  }
}
