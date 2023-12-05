import { Module } from '@nestjs/common';
import { RedisRepository } from './redis-repository';
import { redisClientFactory } from './redis-client.factory';

@Module({
  providers: [RedisRepository, redisClientFactory],
  exports: [RedisRepository],
})
export class RedisModule {}
