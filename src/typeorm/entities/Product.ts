import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from './Type';
import { Supplier } from './Supplier';
import { Image } from './Image';

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

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];
}
