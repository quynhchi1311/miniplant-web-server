import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { Type } from 'src/typeorm/entities/Type';

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}
