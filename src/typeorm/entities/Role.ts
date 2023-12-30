import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer';
import { Employee } from './Employee';

@Entity({ name: 'ROLE' })
export class Role {
  @PrimaryGeneratedColumn()
  roleID: number;

  @Column()
  roleName: string;

  @OneToMany(() => Customer, (customer) => customer.role)
  customers: Customer[];

  @OneToMany(() => Employee, (employee) => employee.role)
  employees: Employee[];
}
