import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/typeorm/entities/Customer';
import { CreateCustomerParams, UpdateCustomerParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import * as bcrypt from 'bcrypt';

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

  findByUsername(username: string) {
    return this.customerRepository.findOneBy({ cusEmail: username })
  }

  isMatchedConfirmPassword(
    createCustomerDetails: CreateCustomerParams,
  ): boolean {
    const { accPassword, accConfirmPassword, ...otherDetails } =
      createCustomerDetails;

    return accPassword === accConfirmPassword;
  }

  async create(createCustomerDetails: CreateCustomerParams) {
    const hashedPassword = await bcrypt.hash(
      createCustomerDetails.accPassword,
      10,
    );
    const { accConfirmPassword, ...userDetails } = createCustomerDetails;
    const newCustomer = this.customerRepository.create({
      ...userDetails,
      accPassword: hashedPassword,
    });

    return this.customerRepository.save(newCustomer);
  }

  update(id: number, updateCustomerDetails: UpdateCustomerParams) {
    return this.customerRepository.update({ cusID: id }, updateCustomerDetails);
  }

  delete(id: number) {
    return this.customerRepository.delete({ cusID: id });
  }
}
