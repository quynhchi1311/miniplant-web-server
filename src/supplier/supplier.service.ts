import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from 'src/typeorm/entities/Supplier';
import { Repository } from 'typeorm';
import { CreateSupplierParams, UpdateSupplierParams } from 'src/utils/types';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier) private supplierRepository: Repository<Supplier>
  ) {}

  findAll() {
    return this.supplierRepository.find();
  }

  findById(id: number) {
    return this.supplierRepository.findOneBy({ supID: id});
  }
  
  create(createSupplierDetails: CreateSupplierParams) {
    const newSupplier = this.supplierRepository.create(createSupplierDetails)
    return this.supplierRepository.save(newSupplier);
  }

  update(id: number, updateSupplierDetails: UpdateSupplierParams) {
    return this.supplierRepository.update({supID: id}, {...updateSupplierDetails});
  }

  delete(id: number) {
    return this.supplierRepository.delete({supID: id});
  }
}
