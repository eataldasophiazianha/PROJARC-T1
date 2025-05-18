import { Product } from '../model/product';

export abstract class ProductRepository {
  abstract findAll(): Promise<Product[]>;
  abstract getById(id: number): Promise<Product | null>;
}
