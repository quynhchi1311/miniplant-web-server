import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/typeorm/entities/Customer';
import { CreateCustomerParams, UpdateCustomerParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  findAll() {
    return this.customerRepository.find();
  }

  findById(id: number) {
    return this.customerRepository.findOneBy({ cusID: id });
  }

  create(createCustomerDetails: CreateCustomerParams) {
    const newCustomer = this.customerRepository.create(createCustomerDetails);
    return this.customerRepository.save(newCustomer);
  }

  update(id: number, updateCustomerDetails: UpdateCustomerParams) {
    return this.customerRepository.update({ cusID: id }, updateCustomerDetails);
  }

  delete(id: number) {
    return this.customerRepository.delete({ cusID: id });
  }
}
