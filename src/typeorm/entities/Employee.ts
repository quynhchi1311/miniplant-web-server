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

@Entity({ name: 'EMPLOYEE' })
export class Employee {
  @PrimaryGeneratedColumn()
  empID: number;

  @Column()
  empName: string;

  @Column()
  empBirthdate: Date;

  @Column()
  empAdd: string;

  @Column()
  empPhone: string;

  @Column({ unique: true })
  empEmail: string;

  @Column()
  startDate: Date;

  @Column()
  accPassword: string;

  @Column()
  accCreatedDate: Date;

  @Column()
  accStatus: number;

  @ManyToOne(() => Role, (role) => role.employees)
  @JoinColumn({ name: 'roleID' })
  role: Role;

  @OneToMany(() => Order, (order) => order.employee)
    orders: Order[];
}
