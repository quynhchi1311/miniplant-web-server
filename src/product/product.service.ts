import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { Product } from 'src/typeorm/entities/Product';
import { CreateProductParams, UpdateProductParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepository.find({ relations: ['images'] });
  }

  findById(id: number) {
    return this.productRepository.findOne({
      where: { proID: id },
      relations: ['supplier', 'type'],
    });
  }

  create(productDetails: CreateProductParams) {
    const newProduct = this.productRepository.create({ ...productDetails });
    return this.productRepository.save(newProduct);
  }

  update(id: number, updateProductDetails: UpdateProductParams) {
    return this.productRepository.update(
      { proID: id },
      { ...updateProductDetails },
    );
  }

  delete(id: number) {
    return this.productRepository.delete({ proID: id });
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Product>> {
    const productList = this.productRepository.createQueryBuilder('PRODUCT');
    productList.orderBy('PRODUCT.proID', 'DESC');

    return paginate<Product>(productList, options);
  }
}
