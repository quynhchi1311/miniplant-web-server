import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product';

@Entity({ name: 'TYPE' })
export class Type {
  @PrimaryGeneratedColumn()
  typeID: number;

  @Column({ unique: true })
  typeName: string;

  @Column()
  category: string;

  @OneToMany(() => Product, (product) => product.type)
  products: Product[];
}
