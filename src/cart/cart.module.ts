import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [RedisModule],
})
export class CartModule {}
