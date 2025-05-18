import { Stock } from './stock';

interface ProductProps {
  code: string;
  description: string;
  price: number;
  stock?: Stock;
}
export class Product {
  id: number;
  code: string;
  description: string;
  price: number;
  stock?: Stock;

  constructor(productProps: ProductProps, id: number) {
    this.id = id ?? Math.floor(Math.random() * 1000000);
    this.code = productProps.code;
    this.description = productProps.description;
    this.price = productProps.price;
    this.stock = productProps.stock;
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
}
