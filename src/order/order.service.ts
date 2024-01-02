import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/typeorm/entities/Order';
import { CreateOrderParams, UpdateOrderParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
  ) {}

  findAll() {
    return this.orderRepository.find();
  }

  findById(id: number) {
    return this.orderRepository.findOne({
      where: { orderID: id },
      relations: ['customer'],
    });
  }

  async create(createOrderDetails: CreateOrderParams) {
    const newOrder = this.orderRepository.create(createOrderDetails);
    const savedOrder = await this.orderRepository.save(newOrder);
    return savedOrder.orderID;
  }

  update(id: number, updateOrderDetails: UpdateOrderParams) {
    return this.orderRepository.update({ orderID: id }, updateOrderDetails);
  }

  delete(id: number) {
    return this.orderRepository.delete({ orderID: id });
  }
}
