import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './Role';
import { Order } from './Order';
import { Gender } from 'src/utils/enums';

@Entity({ name: 'CUSTOMER' })
export class Customer {
  @PrimaryGeneratedColumn()
  cusID: number;

  @Column()
  cusName: string;

  @Column()
  cusGender: Gender;

  @Column()
  cusBirthDate: Date;

  @Column()
  cusAdd: string;

  @Column()
  cusPhone: string;

  @Column()
  cusEmail: string;

  @Column()
  accPassword: string;

  @Column()
  accCreatedDate: Date;

  @ManyToOne(() => Role, (role) => role.customers)
  @JoinColumn({ name: 'roleID' })
  role: Role;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
