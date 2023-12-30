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
import { AuthModule } from './auth/auth.module';
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
import { RoleModule } from './role/role.module';
import { ImageModule } from './image/image.module';
import { Image } from './typeorm/entities/Image';

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
        Role,
        Customer,
        Order,
        Coupon,
        Employee,
        Image
      ],
      synchronize: false,
    }),
    ProductModule,
    TypeModule,
    SupplierModule,
    AuthModule,
    OrderModule,
    CustomerModule,
    CartModule,
    RedisModule,
    CouponModule,
    EmployeeModule,
    RoleModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
