import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from 'src/typeorm/entities/Type';
import { CreateTypeParams, UpdateTypeParams } from 'src/utils/types';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type) private typeRepository: Repository<Type>,
  ) {}

  findAll() {
    return this.typeRepository.find();
  }

  findById(id: number) {
    return this.typeRepository.findOneBy({ typeID: id });
  }

  create(typeDetails: CreateTypeParams) {
    const newType = this.typeRepository.create(typeDetails);
    return this.typeRepository.save(newType);
  }

  update(id: number, updateTypeDetails: UpdateTypeParams) {
    return this.typeRepository.update({ typeID: id }, { ...updateTypeDetails });
  }

  delete(id: number) {
    return this.typeRepository.delete({ typeID: id });
  }
}
