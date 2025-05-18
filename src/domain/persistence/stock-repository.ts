export abstract class StockRepository {
   abstract getStockQuantity(id: number): Promise<number>;
   abstract decreaseStock(id: number, quantity: number): Promise<void>;
   abstract increaseStock(id: number, quantity: number): Promise<void>;
}
