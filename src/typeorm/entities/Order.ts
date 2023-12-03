import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer';
import { OrderStatus } from 'src/utils/enums';

@Entity({ name: 'ORDER' })
export class Order {
  @PrimaryGeneratedColumn()
  orderID: number;

  @Column()
  orderDate: Date;

  @Column()
  orderPreTotal: number;

  @Column()
  orderTotal: number;

  @Column()
  orderStatus: OrderStatus;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: 'cusID' })
  customer: Customer;
}
