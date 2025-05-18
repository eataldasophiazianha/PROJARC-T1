import { Product } from './product';

export class Stock {
  id: number;
  productId: number;
  minQuantity: number;
  maxQuantity: number;
  currentQuantity: number;
  updatedAt: Date;
  product?: Product;

  constructor(
    id: number,
    productId: number,
    minQuantity: number,
    maxQuantity: number,
    currentQuantity: number,
    updatedAt: Date,
    product?: Product,
  ) {
    this.id = id;
    this.productId = productId;
    this.minQuantity = minQuantity;
    this.maxQuantity = maxQuantity;
    this.currentQuantity = currentQuantity;
    this.updatedAt = updatedAt;
    this.product = product;
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
  public getProduct(): Product | undefined {
    return this.product;
  }
  public setProduct(value: Product | undefined) {
    this.product = value;
  }
}
