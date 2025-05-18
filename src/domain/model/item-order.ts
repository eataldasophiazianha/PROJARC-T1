import { Product } from './product';

export class ItemOrder {
  private product: Product;
  private quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  public getProduct(): Product {
    return this.product;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public toString(): string {
    return `OrderItem [product=${this.product}, quantity=${this.quantity}]`;
  }
}
