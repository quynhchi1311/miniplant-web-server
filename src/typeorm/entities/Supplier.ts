import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './Product';

@Entity({ name: 'SUPPLIER' })
export class Supplier {
  @PrimaryGeneratedColumn()
  supID: number;

  @Column({ unique: true })
  supName: string;

  @Column()
  supAdd: string;

  @Column()
  supPhone: string;

  @Column()
  supEmail: string;

  @OneToMany(() => Product, (product) => product.supplier)
  products: Product[];
}
