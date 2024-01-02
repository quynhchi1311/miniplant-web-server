import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity({name: "ORDER_PRODUCT"})
export class OrderProduct {
    @PrimaryColumn()
    orderID: number;

    @PrimaryColumn()
    proID: number;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    costPrice: number;

    @Column()
    discountPercent: number;

    @ManyToOne(() => Order, (order) => order.ordersProducts)
    @JoinColumn({name: 'orderID'})
    public order: Order

    @ManyToOne(() => Product, (product) => product.ordersProducts)
    @JoinColumn({name: 'proID'})
    public product: Product
}