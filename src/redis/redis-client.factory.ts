import { FactoryProvider } from '@nestjs/common';
import { Redis } from 'ioredis';
import { redisConstants } from 'src/constants';

export const redisClientFactory: FactoryProvider<Redis> = {
    provide: 'RedisClient',
    useFactory: () => {
        const redisInstance = new Redis({
            host: redisConstants.redisHost,
            port: redisConstants.redisPort,
        });

        redisInstance.on('error', e => {
            throw new Error(`Redis connection failed: ${e}`);
        });

        return redisInstance;
    },
    inject: [],
};