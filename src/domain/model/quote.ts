import { QuoteItem } from './quote-item';

export enum QuoteStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED',
}

interface QuoteProps {
  code: string;
  date: Date;
  clientName: string;
  country: string;
  state: string;
  stateTaxPercent: number;
  federalTaxPercent: number;
  stateTaxAmount: number;
  federalTaxAmount: number;
  discountPercent: number;
  discountAmount: number;
  totalValue: number;
  finalValue: number;
  status: QuoteStatus;
  validUntil: Date;
  items?: QuoteItem[];
}
export class Quote {
  id: number;
  code: string;
  date: Date;
  clientName: string;
  country: string;
  state: string;
  stateTaxPercent: number;
  federalTaxPercent: number;
  stateTaxAmount: number;
  federalTaxAmount: number;
  discountPercent: number;
  discountAmount: number;
  totalValue: number;
  finalValue: number;
  status: QuoteStatus;
  validUntil: Date;
  items?: QuoteItem[];

  constructor(quoteProps: QuoteProps, id: number) {
    this.id = id ?? Math.floor(Math.random() * 1000000);
    this.code = quoteProps.code;
    this.date = quoteProps.date;
    this.clientName = quoteProps.clientName;
    this.country = quoteProps.country;
    this.state = quoteProps.state;
    this.stateTaxPercent = quoteProps.stateTaxPercent;
    this.federalTaxPercent = quoteProps.federalTaxPercent;
    this.stateTaxAmount = quoteProps.stateTaxAmount;
    this.federalTaxAmount = quoteProps.federalTaxAmount;
    this.discountPercent = quoteProps.discountPercent;
    this.discountAmount = quoteProps.discountAmount;
    this.totalValue = quoteProps.totalValue;
    this.finalValue = quoteProps.finalValue;
    this.status = quoteProps.status;
    this.validUntil = quoteProps.validUntil;
    this.items = quoteProps.items;
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
  public getDate(): Date {
    return this.date;
  }
  public setDate(value: Date) {
    this.date = value;
  }
  public getClientName(): string {
    return this.clientName;
  }
  public setClientName(value: string) {
    this.clientName = value;
  }
  public getCountry(): string {
    return this.country;
  }
  public setCountry(value: string) {
    this.country = value;
  }
  public getState(): string {
    return this.state;
  }
  public setState(value: string) {
    this.state = value;
  }
  public getStateTaxPercent(): number {
    return this.stateTaxPercent;
  }
  public setStateTaxPercent(value: number) {
    this.stateTaxPercent = value;
  }
  public getFederalTaxPercent(): number {
    return this.federalTaxPercent;
  }
  public setFederalTaxPercent(value: number) {
    this.federalTaxPercent = value;
  }
  public getStateTaxAmount(): number {
    return this.stateTaxAmount;
  }
  public setStateTaxAmount(value: number) {
    this.stateTaxAmount = value;
  }
  public getFederalTaxAmount(): number {
    return this.federalTaxAmount;
  }
  public setFederalTaxAmount(value: number) {
    this.federalTaxAmount = value;
  }
  public getDiscountPercent(): number {
    return this.discountPercent;
  }
  public setDiscountPercent(value: number) {
    this.discountPercent = value;
  }
  public getDiscountAmount(): number {
    return this.discountAmount;
  }
  public setDiscountAmount(value: number) {
    this.discountAmount = value;
  }
  public getTotalValue(): number {
    return this.totalValue;
  }
  public setTotalValue(value: number) {
    this.totalValue = value;
  }
  public getFinalValue(): number {
    return this.finalValue;
  }
  public setFinalValue(value: number) {
    this.finalValue = value;
  }
  public getStatus(): QuoteStatus {
    return this.status;
  }
  public setStatus(value: QuoteStatus) {
    this.status = value;
  }
  public getValidUntil(): Date {
    return this.validUntil;
  }
  public setValidUntil(value: Date) {
    this.validUntil = value;
  }
  public getItems(): QuoteItem[] | undefined {
    return this.items;
  }
  public setItems(value: QuoteItem[] | undefined) {
    this.items = value;
  }
}
