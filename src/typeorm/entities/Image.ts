import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Role } from "./Role";

@Entity ({name: "IMAGE"})
export class Image {
    @PrimaryGeneratedColumn()
    imageID:  number;

    @Column()
    imageSrc: string;

    @Column()
    isMain: number;

    @Column()
    proID: number;

    @ManyToOne(() => Product, (product) => product.images)
    @JoinColumn({ name: 'proID' })
    product: Product;
}