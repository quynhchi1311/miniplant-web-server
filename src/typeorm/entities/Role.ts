import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Customer } from "./Customer";

@Entity ({name: "ROLE"})
export class Role {
    @PrimaryGeneratedColumn()
    roleID: number;

    @Column()
    roleName: string;

    @OneToMany(() => User, (user) => user.role)
    users: User[];

    @OneToMany(() => Customer, (customer) => customer.role)
    customers: Customer[];
}