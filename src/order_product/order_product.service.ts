import { Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from './dto/create-order_product.dto';
import { UpdateOrderProductDto } from './dto/update-order_product.dto';
import {
  CreateOrderProductParams,
  UpdateOrderProductParams,
} from 'src/utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProduct } from 'src/typeorm/entities/Order_Product';
import { Repository } from 'typeorm';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct)
    private orderProductRepository: Repository<OrderProduct>,
  ) {}

  findAll() {
    return this.orderProductRepository.find();
  }

  findByProID(id: number) {
    return this.orderProductRepository.findOneBy({ proID: id });
  }

  // getNewest() {
  //   return this.orderProductRepository.findOne({ order: { orderID: 'DESC' } });
  // }

  create(createOrderProductDetails: CreateOrderProductParams) {
    const newOrderProduct = this.orderProductRepository.create(
      createOrderProductDetails,
    );
    return this.orderProductRepository.save(newOrderProduct);
  }

  updateByOrderID(
    id: number,
    updateOrderProductDetails: UpdateOrderProductParams,
  ) {
    return this.orderProductRepository.update(
      { orderID: id },
      updateOrderProductDetails,
    );
  }

  deleteByOrderID(id: number) {
    return this.orderProductRepository.delete({ orderID: id });
  }
}
