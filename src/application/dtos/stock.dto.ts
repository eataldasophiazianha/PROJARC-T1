import { ApiProperty } from '@nestjs/swagger';

export class AddStockEntry {
  @ApiProperty({
    description: 'Id do produto',
    example: 1,
  })
  productId: number;

  @ApiProperty({
    description: 'Quantidade a ser adicionada',
    example: 10,
  })
  quantity: number;
}
