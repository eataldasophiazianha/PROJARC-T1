import { Product } from './product';

export class SockItem {
  private id: number;
  private product: Product;
  private quantity: number;
  private min_stock: number;
  private max_stock: number;

  constructor(
    id: number,
    product: Product,
    quantity: number,
    min_stock: number,
    max_stock: number,
  ) {
    this.id = id;
    this.product = product;
    this.quantity = quantity;
    this.min_stock = min_stock;
    this.max_stock = max_stock;
  }

  public getId(): number {
    return this.id;
  }

  public getProduct(): Product {
    return this.product;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public getMin_stock(): number {
    return this.min_stock;
  }

  public getMax_stock(): number {
    return this.max_stock;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public setMin_stock(min_stock: number): void {
    this.min_stock = min_stock;
  }

  public setMax_stock(max_stock: number): void {
    this.max_stock = max_stock;
  }

  public toString(): string {
    return `ItemDeEstoque [id=${this.id}, produto=${this.product}, quantity=${this.quantity}, min_stock=${this.min_stock}, max_stock=${this.max_stock}]`;
  }
}
