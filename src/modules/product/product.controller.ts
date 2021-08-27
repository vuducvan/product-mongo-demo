import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { IProduct } from './interfaces/product.interface';
import { ProductService } from './product.service';
import { ApiTags, ApiOperation, ApiSecurity } from '@nestjs/swagger';
import { Request } from '@nestjs/common';
@ApiSecurity('token')
@ApiTags('Product')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @ApiOperation({
    operationId: 'GetAllProDuct',
    description: 'get all product',
  })
  @Get()
  findAll(): Promise<IProduct[]> {
    return this.productService.findAll();
  }

  @ApiOperation({
    operationId: 'GetProductById',
    description: 'get product by Id',
  })
  @Get('/:id')
  findById(@Param('id') id: string): Promise<IProduct> {
    return this.productService.findById(id);
  }

  @ApiOperation({
    operationId: 'CreateOneProduct',
    description: 'Create a new product',
  })
  @Post()
  create(@Body() body: ProductDto, @Req() req: Request): Promise<IProduct> {
    return this.productService.createOne(body, req);
  }

  @ApiOperation({
    operationId: 'UpdateOneProduct',
    description: 'Update one product',
  })
  @Patch('/update/:id')
  updateOne(
    @Param('id') id: string,
    @Body() body: ProductDto,
    @Req() req: Request,
  ) {
    return this.productService.updateOne(id, body, req);
  }

  @ApiOperation({
    operationId: 'RemoveOneProduct',
    description: 'Remove one product',
  })
  @Patch('/delete/:id')
  removeOne(@Param('id') id: string) {
    return this.productService.removeOne(id);
  }
}
