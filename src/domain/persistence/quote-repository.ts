import { Quote } from '../model/quote';

export abstract class QuoteRepository {
  abstract findAll(): Promise<Quote[]>;
  abstract create(budget: Quote): Promise<Quote>;
  abstract findByCode(code: string): Promise<Quote | null>;
  abstract findById(id: number): Promise<Quote | null>;
  abstract markAsCompleted(id: number): Promise<void>;
  abstract listByPeriod(startDate: Date, endDate: Date): Promise<Quote[]>;
}
