import { Controller, Post, UseGuards, Res, Body } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { AddStockEntry } from 'src/application/dtos/stock.dto';
import { StockEntryUseCase } from 'src/application/use-cases/stock-entry';

@Controller('stock')
@ApiTags('Estoque')
export class StockController {
  constructor(private readonly stockEntryUseCase: StockEntryUseCase) {}

  @Post('/entry')
  @ApiOperation({
    summary: 'Adicionar Entrada de Estoque',
    description: `Endpoint responsável por adicionar uma entrada de estoque, espera o *productId* e a *quantidade* a ser adicionada ao estoque.`,
  })
  @ApiResponse({
    status: 200,
    description: 'Entrada de estoque adicionada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    schema: {
      properties: {
        message: {
          type: 'string',
          example: 'Bad Request',
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    schema: {
      properties: {
        message: {
          type: 'string',
          example: 'Internal Server Error',
        },
      },
    },
  })
  async execute(@Body() body: AddStockEntry) {
    const entry = await this.stockEntryUseCase.register_entry(
      body.productId,
      body.quantity,
    );
    return entry;
  }
}
