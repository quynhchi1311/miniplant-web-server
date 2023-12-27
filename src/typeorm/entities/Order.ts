import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer';
import { OrderStatus } from 'src/utils/enums';
import { Coupon } from './Coupon';
import { Employee } from './Employee';

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

  @ManyToOne(() => Coupon, (coupon) => coupon.orders)
  @JoinColumn({ name: 'couponID' })
  coupon: Coupon;

  @ManyToOne(() => Employee, (employee) => employee.orders)
  @JoinColumn({ name: 'empID' })
  employee: Employee;
}
