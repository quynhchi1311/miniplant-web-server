import { type } from "os";
import { Gender, OrderStatus } from "./enums";

export type CreateProductParams = {
  proName: string;
  proDescr: string;
  proPrice: number;
  proQuantity: number;
  proDiscountPercent: number;
};

export type UpdateProductParams = {
  proName: string;
  proDescr: string;
  proPrice: number;
  proQuantity: number;
  proDiscountPercent: number;
};

export type CreateTypeParams = {
  typeName: string;
  category: string;
};

export type UpdateTypeParams = {
  typeName: string;
  category: string;
};

export type CreateSupplierParams = {
  supName: string;
  supAdd: string;
  supPhone: string;
  supEmail: string;
};

export type UpdateSupplierParams = {
  supName: string;
  supAdd: string;
  supPhone: string;
  supEmail: string;
};

export type CreateUserParams = {
  userName: string;
  userPassword: string;
  createdDate: Date;
};

export type UpdateUserParams = {
  userName: string;
  userPassword: string;
};

export type CreateCustomerParams = {
  cusName: string;
  cusGender: Gender;
  cusBirthDate: Date;
  cusAdd: string;
  cusPhone: string;
  cusEmail: string;
  accPassword: string;
  accCreatedDate: Date;
  roleID: number;
};

export type UpdateCustomerParams = {
  cusName: string;
  cusGender: Gender;
  cusBirthDate: Date;
  cusAdd: string;
  cusPhone: string;
  cusEmail: string;
  accPassword: string;
  accCreatedDate: Date;
  roleID: number;
};

export type CreateOrderParams = {
  orderDate: Date;
  orderPreTotal: number;
  orderTotal: number;
  orderStatus: OrderStatus;
  cusID: number;
}

export type UpdateOrderParams = {
  orderDate: Date;
  orderPreTotal: number;
  orderTotal: number;
  orderStatus: OrderStatus;
  cusID: number;
}

export type LoginUserParams = {
  userName: string;
  userPassword: string;
  // typeLogin: string;
};