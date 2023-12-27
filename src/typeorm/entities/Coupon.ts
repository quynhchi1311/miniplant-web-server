import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';

@Entity({ name: 'COUPON' })
export class Coupon {
  @PrimaryGeneratedColumn()
  couponID: number;

  @Column({ unique: true })
  couponCode: string;

  @Column()
  couponName: string;

  @Column()
  couponDescr: string;

  @Column()
  maxDiscountValue: number;

  @Column()
  discountPercent: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @OneToMany(() => Order, (order) => order.coupon)
  orders: Order[];
}
