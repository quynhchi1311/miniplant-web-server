import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerParams } from 'src/utils/types';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerDetails: CreateCustomerParams) {
    if (this.customerService.isMatchedConfirmPassword(createCustomerDetails)) {
      return await this.customerService.create(createCustomerDetails);
    } else {
      throw new BadRequestException('Passwords do not match');
    }
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.customerService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customerService.delete(+id);
  }
}
