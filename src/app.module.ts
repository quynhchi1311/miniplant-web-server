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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'MiniplantDB',
      entities: [Product, Type, Supplier, User, Role, Customer, Order],
      synchronize: false,
    }),
    ProductModule,
    TypeModule,
    SupplierModule,
    UserModule,
    AuthModule,
    OrderModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
