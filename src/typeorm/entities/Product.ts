import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from './Type';
import { Supplier } from './Supplier';

@Entity({ name: 'PRODUCT' })
export class Product {
  @PrimaryGeneratedColumn()
  proID: number;

  @Column({ unique: true })
  proName: string;

  @Column()
  proDescr: string;

  @Column()
  proPrice: number;

  @Column()
  proQuantity: number;

  @Column({ default: 0 })
  proDiscountPercent: number;

  @ManyToOne(() => Type, (type) => type.products)
  @JoinColumn({name: "typeID"})
  type: Type;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  @JoinColumn({name: "supID"})
  supplier: Supplier;
}
