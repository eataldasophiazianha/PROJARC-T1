import { Product } from './product';

export class StockEntry {
  id: number;
  productId: number;
  quantity: number;
  entryDate: Date;

  constructor(
    id: number,
    productId: number,
    quantity: number,
    entryDate: Date,
  ) {
    this.id = id;
    this.productId = productId;
    this.quantity = quantity;
    this.entryDate = entryDate;
  }

  public getId(): number {
    return this.id;
  }
  public setId(value: number) {
    this.id = value;
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
  public getEntryDate(): Date {
    return this.entryDate;
  }
  public setEntryDate(value: Date) {
    this.entryDate = value;
  }
}
