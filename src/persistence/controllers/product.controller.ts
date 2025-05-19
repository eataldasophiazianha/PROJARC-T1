import { Controller, Post, UseGuards, Res, Body, Get } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { AddStockEntry } from 'src/application/dtos/stock.dto';
import { ProductsUseCase } from 'src/application/use-cases/product';
import { StockEntryUseCase } from 'src/application/use-cases/stock-entry';

@Controller('product')
@ApiTags('Produtos')
export class ProductController {
  constructor(private readonly productsUseCase: ProductsUseCase) {}

  @Get('/stock')
  @ApiOperation({
    summary: 'Listar Estoque de todos os produtos',
    description: `Endpoint responsável por listar o estoque de todos os produtos.`,
  })
  @ApiResponse({
    status: 200,
    description: 'Estoque listado com sucesso',
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
  async execute() {
    const stock = await this.productsUseCase.list_products_stock();
    return stock;
  }
}
