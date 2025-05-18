import { ItemOrder } from './item-order';

export class Order {
  private id: number;
  private items: ItemOrder[];

  constructor(id: number) {
    this.id = id;
    this.items = [];
  }

  public getId(): number {
    return this.id;
  }

  public getItems(): ItemOrder[] {
    return [...this.items];
  }

  public addItem(item: ItemOrder): void {
    this.items.push(item);
  }
}
