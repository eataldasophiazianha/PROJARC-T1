import { Injectable } from '@nestjs/common';
import { Product } from 'src/domain/model/product';
import { ProductRepository } from 'src/domain/persistence/product-repository';
import { PrismaService } from 'src/persistence/config/prisma';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}
  findById(id: number): Promise<Product | null> {
    throw new Error('Method not implemented.');
  }
  findByCode(code: string): Promise<Product | null> {
    throw new Error('Method not implemented.');
  }
  save(product: Product): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Promise<Product | null> {
    throw new Error('Method not implemented.');
  }
}
