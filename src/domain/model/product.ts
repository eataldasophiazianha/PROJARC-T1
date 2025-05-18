export class Product {
  private id: number;
  private description: string;
  private unitPrice: number;

  constructor(id: number, description: string, unitPrice: number) {
    this.id = id;
    this.description = description;
    this.unitPrice = unitPrice;
  }

  public getId(): number {
    return this.id;
  }

  public getDescription(): string {
    return this.description;
  }

  public getUnitPrice(): number {
    return this.unitPrice;
  }

  public setUnitPrice(unitPrice: number): void {
    this.unitPrice = unitPrice;
  }

  public toString(): string {
    return `{ code='${this.id}', description='${this.description}', unitPrice='${this.unitPrice}' }`;
  }
}
