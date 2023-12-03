import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserDetails: CreateUserParams) {
    const newUser = this.userRepository.create(createUserDetails);
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findByUsername(name: string) {
    return this.userRepository.findOne({
      where: { userName: name },
      relations: ['role']
    });
  }

  // update(id: number, updateUserDetails: UpdateUserParams) {
  //   return `This action updates a #${id} user`;
  // }

  // delete(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
