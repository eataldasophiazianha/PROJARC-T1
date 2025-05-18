import { ItemOrder } from './item-order';
import { Order } from './order';

export enum QuoteStatus {
  PENDENTE = 'PENDENTE',
  EFETIVADO = 'EFETIVADO',
}

export class Quote {
  id: number;
  customer: string;
  country: string;
  state: string;
  items: ItemOrder[];
  date: Date;
  status: QuoteStatus;
  stateTax: number;
  federalTax: number;
  itemDiscount: number;
  totalDiscount: number;
  totalValue: number;
  customerCost: number;

  constructor(quote: Quote) {
    this.id = quote.id;
    this.customer = quote.customer;
    this.country = quote.country;
    this.state = quote.state;
    this.items = quote.items;
    this.date = quote.date;
    this.status = quote.status;
    this.stateTax = quote.stateTax;
    this.federalTax = quote.federalTax;
    this.itemDiscount = quote.itemDiscount;
    this.totalDiscount = quote.totalDiscount;
    this.totalValue = quote.totalValue;
    this.customerCost =
      this.getItemsCost() + this.getTax() - this.getDiscount();
  }

  public addItemsFromOrder(order: Order): void {
    for (const item of order.getItems()) {
      this.items.push(item);
    }
  }

  public getItems(): ItemOrder[] {
    return [...this.items];
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getItemsCost(): number {
    return this.items
      .map((item) => item.getProduct().getUnitPrice() * item.getQuantity())
      .reduce((a, b) => a + b, 0);
  }
  public getCustomer(): string {
    return this.customer;
  }
  public setCustomer(customer: string): void {
    this.customer = customer;
  }
  public getCountry(): string {
    return this.country;
  }
  public setCountry(country: string): void {
    this.country = country;
  }
  public getState(): string {
    return this.state;
  }
  public setState(state: string): void {
    this.state = state;
  }
  public getDate(): Date {
    return this.date;
  }
  public setDate(date: Date): void {
    this.date = date;
  }
  public getStatus(): QuoteStatus {
    return this.status;
  }
  public setStatus(status: QuoteStatus): void {
    this.status = status;
  }

  public getStateTax(): number {
    return this.stateTax;
  }

  public setStateTax(stateTax: number): void {
    this.stateTax = stateTax;
  }
  public getFederalTax(): number {
    return this.federalTax;
  }
  public setFederalTax(federalTax: number): void {
    this.federalTax = federalTax;
  }
  public getItemDiscount(): number {
    return this.itemDiscount;
  }
  public setItemDiscount(itemDiscount: number): void {
    this.itemDiscount = itemDiscount;
  }
  public getTotalDiscount(): number {
    return this.totalDiscount;
  }
  public setTotalDiscount(totalDiscount: number): void {
    this.totalDiscount = totalDiscount;
  }
  public getTotalValue(): number {
    return this.totalValue;
  }
  public setTotalValue(totalValue: number): void {
    this.totalValue = totalValue;
  }
  public getTax(): number {
    return this.stateTax + this.federalTax;
  }
  public getDiscount(): number {
    return this.itemDiscount + this.totalDiscount;
  }

  public getConsumerCost(): number {
    return this.getItemsCost() + this.getTax() - this.getDiscount();
  }

  public toString(): string {
    return `Quote [id=${this.id}, customer=${this.customer}, country=${this.country}, state=${this.state}, items=${this.items}, date=${this.date}, status=${this.status}, stateTax=${this.stateTax}, federalTax=${this.federalTax}, itemDiscount=${this.itemDiscount}, totalDiscount=${this.totalDiscount}, totalValue=${this.totalValue}]`;
  }
}
