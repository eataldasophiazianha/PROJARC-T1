import { StockEntry } from '../model/stock-entry';

export abstract class StockEntryRepository {
  abstract findById(id: number): Promise<StockEntry | null>;
  abstract findAll(): Promise<StockEntry[]>;
  abstract add_entry(stockEntry: StockEntry): Promise<StockEntry>;
  abstract delete(id: number): Promise<void>;
}
