import { Product } from './product';

interface StockProps {
  productId: number;
  minQuantity: number;
  maxQuantity: number;
  currentQuantity: number;
  updatedAt: Date;
}

export class Stock {
  id: number;
  productId: number;
  minQuantity: number;
  maxQuantity: number;
  currentQuantity: number;
  updatedAt: Date;

  constructor(stockProps: StockProps, id: number) {
    this.id = id;
    this.productId = stockProps.productId;
    this.minQuantity = stockProps.minQuantity;
    this.maxQuantity = stockProps.maxQuantity;
    this.currentQuantity = stockProps.currentQuantity;
    this.updatedAt = stockProps.updatedAt;
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
  public getMinQuantity(): number {
    return this.minQuantity;
  }
  public setMinQuantity(value: number) {
    this.minQuantity = value;
  }
  public getMaxQuantity(): number {
    return this.maxQuantity;
  }
  public setMaxQuantity(value: number) {
    this.maxQuantity = value;
  }
  public getCurrentQuantity(): number {
    return this.currentQuantity;
  }
  public setCurrentQuantity(value: number) {
    this.currentQuantity = value;
  }
  public getUpdatedAt(): Date {
    return this.updatedAt;
  }
  public setUpdatedAt(value: Date) {
    this.updatedAt = value;
  }
}
