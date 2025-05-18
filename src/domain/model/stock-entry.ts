import { Product } from './product';

interface StockProps {
  productId: number;
  quantity: number;
  stockId: number;
  entryDate: Date;
}
export class StockEntry {
  id: number;
  productId: number;
  quantity: number;
  entryDate: Date;
  stockId: number;

  constructor(stockProps: StockProps, id: number) {
    this.id = id;
    this.productId = stockProps.productId;
    this.quantity = stockProps.quantity;
    this.entryDate = stockProps.entryDate;
    this.stockId = stockProps.stockId;
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

  public getStockId(): number {
    return this.stockId;
  }
  public setStockId(value: number) {
    this.stockId = value;
  }
}
