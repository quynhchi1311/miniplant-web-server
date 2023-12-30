import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role } from 'src/typeorm/entities/Role';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleParams, UpdateRoleParams } from 'src/utils/types';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleService) private roleService: Repository<Role>,
  ) {}

  findAll() {
    return this.roleService.find();
  }

  findById(id: number) {
    return this.roleService.findOne({
      where: { roleID: id },
    });
  }

  create(createRoleDetails: CreateRoleParams) {
    const newRole = this.roleService.create(createRoleDetails);
    return this.roleService.save(newRole);
  }

  update(id: number, updateRoleDetails: UpdateRoleParams) {
    return this.roleService.update({ roleID: id }, updateRoleDetails);
  }

  delete(id: number) {
    return this.roleService.delete({ roleID: id });
  }
}
