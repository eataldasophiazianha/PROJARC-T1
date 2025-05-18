import { Product } from '../model/product';

export abstract class ProductRepository {
  abstract findById(id: number): Promise<Product | null>;
  abstract findByCode(code: string): Promise<Product | null>;
  abstract findAll(): Promise<Product[]>;
  abstract save(product: Product): Promise<void>;
}
