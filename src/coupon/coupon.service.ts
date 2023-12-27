import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coupon } from 'src/typeorm/entities/Coupon';
import { Repository } from 'typeorm';
import { CreateCouponParams, UpdateCouponParams } from 'src/utils/types';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(Coupon) private couponRepository: Repository<Coupon>,
  ) {}

  findAll() {
    return this.couponRepository.find();
  }

  findById(id: number) {
    return this.couponRepository.findOne({
      where: { couponID: id },
    });
  }

  create(createCouponDetails: CreateCouponParams) {
    const newCoupon = this.couponRepository.create(createCouponDetails);
    return this.couponRepository.save(newCoupon);
  }

  update(id: number, updateCouponDetails: UpdateCouponParams) {
    return this.couponRepository.update({ couponID: id }, updateCouponDetails);
  }

  delete(id: number) {
    return this.couponRepository.delete({ couponID: id });
  }
}
