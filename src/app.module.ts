import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './typeorm/entities/Product';
import { Type } from './typeorm/entities/Type';
import { ProductModule } from './product/product.module';
import { TypeModule } from './type/type.module';
import { SupplierModule } from './supplier/supplier.module';
import { Supplier } from './typeorm/entities/Supplier';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './typeorm/entities/User';
import { Role } from './typeorm/entities/Role';
import { OrderModule } from './order/order.module';
import { Customer } from './typeorm/entities/Customer';
import { Order } from './typeorm/entities/Order';
import { CustomerModule } from './customer/customer.module';
import { CacheModule } from '@nestjs/cache-manager';
import { CartModule } from './cart/cart.module';
// import { redisStore } from 'cache-manager-redis-yet';
import { RedisModule } from './redis/redis.module';
import { CouponModule } from './coupon/coupon.module';
import { Coupon } from './typeorm/entities/Coupon';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './typeorm/entities/Employee';

@Module({
  imports: [
    // CacheModule.register({
    //   ttl: 180000,
    //   store: redisStore,
    //   host: 'localhost',
    //   port: 6379,
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'MiniplantDB',
      entities: [
        Product,
        Type,
        Supplier,
        User,
        Role,
        Customer,
        Order,
        Coupon,
        Employee,
      ],
      synchronize: false,
    }),
    ProductModule,
    TypeModule,
    SupplierModule,
    UserModule,
    AuthModule,
    OrderModule,
    CustomerModule,
    CartModule,
    RedisModule,
    CouponModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
