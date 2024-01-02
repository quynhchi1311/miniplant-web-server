import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//get env data
// import { ConfigService } from '@nestjs/config';
import RedisStore from 'connect-redis';
import * as session from 'express-session';
import { createClient } from 'redis';
import { Logger } from '@nestjs/common';
import { TIMETOLIVE } from './constants';
import * as cookieParser from 'cookie-parser';

const RedisStore = require('connect-redis').default;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const redisHost: string = 'localhost';
  const redisPort: number = 6379;
  const redisClient = createClient({
    socket: {
      host: redisHost,
      port: redisPort,
    },
  });

  redisClient.connect().catch(console.error);

  const redisStore = new RedisStore({
    client: redisClient,
    prefix: "session:",
  });

  redisClient.on('error', (err) =>
    Logger.error('Could not establish a connection with redis. ' + err),
  );
  redisClient.on('connect', () =>
    Logger.verbose('Connected to redis successfully'),
  );

  app.use(
    session({
      store: redisStore,
      name: 'USER_SESSION_ID',
      secret: 'root',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: TIMETOLIVE,
        secure: false,
      },
    }),
  );
  app.enableCors({
    origin: 'http://localhost:9000', // Replace with your front-end domain
    credentials: true, // Allows the browser to send cookies
  });
  app.use(cookieParser());
  await app.listen(5000);
}
bootstrap();
