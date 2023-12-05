import { Inject, Injectable } from '@nestjs/common';
import { RedisRepository } from 'src/redis/redis-repository';
import { PushProductToCartParams } from 'src/utils/types';
import { TIMETOLIVE } from 'src/constants';

@Injectable()
export class CartService {
  constructor(
    @Inject(RedisRepository) private readonly redisRepository: RedisRepository,
  ) {}

  //GET
  //SET
  //DEL
  //RESET

  async pushProductToCart(
    sessionID: string,
    pushProductToCartParams: PushProductToCartParams,
  ) {
    // return await this.redisRepository.setWithExpiry(
    //   'redisCart:',
    //   sessionID,
    //   JSON.stringify(pushProductToCartParams),
    //   TIMETOLIVE,
    // );
    return await this.redisRepository.set(
      'redisCart:',
      sessionID,
      JSON.stringify(pushProductToCartParams),
    );
  }

  async getCart(sessionID: string) {
    return await this.redisRepository.get('redisCart:', sessionID);
  }
}
