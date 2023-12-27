import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/typeorm/entities/Employee';
import { Repository } from 'typeorm';
import { CreateEmployeeParams, UpdateEmployeeParams } from 'src/utils/types';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  findAll() {
    return this.employeeRepository.find();
  }

  findById(id: number) {
    return this.employeeRepository.findOne({
      where: { empID: id },
    });
  }

  create(createEmployeeDetails: CreateEmployeeParams) {
    const newEmployee = this.employeeRepository.create(createEmployeeDetails);
    return this.employeeRepository.save(newEmployee);
  }

  update(id: number, updateEmployeeDetails: UpdateEmployeeParams) {
    return this.employeeRepository.update({ empID: id }, updateEmployeeDetails);
  }

  delete(id: number) {
    return this.employeeRepository.delete({ empID: id });
  }
}
