import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProductService } from './order_product.service';
import { OrderProductController } from './order_product.controller';
import { OrderProduct } from 'src/typeorm/entities/Order_Product';

@Module({
  imports: [TypeOrmModule.forFeature([OrderProduct])],
  controllers: [OrderProductController],
  providers: [OrderProductService],
})
export class OrderProductModule {}
