import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./Role";
import { Order } from "./Order";

@Entity ({ name: "USER"})
export class User {
    @PrimaryGeneratedColumn()
    userID: number;

    @Column()
    userName: string;

    @Column()
    userPassword: string;

    @CreateDateColumn()
    createdDate: Date;

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({name: "roleID"})
    role: Role;

    // @OneToMany(() => Order, (order) => order.user)
    // @JoinColumn({name: "orderID"})
    // orders: Order[];
}