import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderProductService } from './order_product.service';
import { CreateOrderProductDto } from './dto/create-order_product.dto';
import { UpdateOrderProductDto } from './dto/update-order_product.dto';

@Controller('order-product')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Post()
  create(@Body() createOrderProductDto: CreateOrderProductDto) {
    return this.orderProductService.create(createOrderProductDto);
  }

  @Get()
  findAll() {
    return this.orderProductService.findAll();
  }

  // @Get()
  // getNewest(@Param('id') id: string) {
  //   return this.orderProductService.getNewest();
  // }

  @Get('proID/:id')
  findByProID(@Param('id') id: string) {
    return this.orderProductService.findByProID(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderProductDto: UpdateOrderProductDto) {
    return this.orderProductService.updateByOrderID(+id, updateOrderProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.orderProductService.deleteByOrderID(+id);
  }
}
