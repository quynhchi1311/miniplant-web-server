import { type } from 'os';
import { Gender, OrderStatus } from './enums';

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

export type CreateCustomerParams = {
  cusName: string;
  cusGender: Gender;
  cusBirthDate: Date;
  cusAdd: string;
  cusPhone: string;
  cusEmail: string;
  accPassword: string;
  accConfirmPassword: string;
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
};

export type UpdateOrderParams = {
  orderDate: Date;
  orderPreTotal: number;
  orderTotal: number;
  orderStatus: OrderStatus;
  cusID: number;
};

export type CreateCouponParams = {
  couponID: number;
  couponCode: string;
  couponName: string;
  couponDescr: string;
  maxDiscountValue: number;
  discountPercent: number;
  startDate: Date;
  endDate: Date;
};

export type UpdateCouponParams = {
  couponID: number;
  couponCode: string;
  couponName: string;
  couponDescr: string;
  maxDiscountValue: number;
  discountPercent: number;
  startDate: Date;
  endDate: Date;
};

export type CreateEmployeeParams = {
  empID: number;
  empName: string;
  empBirthdate: Date;
  empAdd: string;
  empPhone: string;
  empEmail: string;
  startDate: Date;
  accPassword: string;
  accCreatedDate: Date;
  accStatus: number;
};

export type UpdateEmployeeParams = {
  empID: number;
  empName: string;
  empBirthdate: Date;
  empAdd: string;
  empPhone: string;
  empEmail: string;
  startDate: Date;
  accPassword: string;
  accCreatedDate: Date;
  accStatus: number;
};

export type CreateRoleParams = {
  roleName: string;
};

export type UpdateRoleParams = {
  roleName: string;
};

export type LoginUserParams = {
  userName: string;
  userPassword: string;
  // typeLogin: string;
};

export type CreateImageParams = {
  imageSrc: string;
  isMain: number;
  proID: number;
};

export type UpdateImageParams = {
  imageSrc: string;
  isMain: number;
  proID: number;
};

export type PushProductToCartParams = {
  proID: number;
  proName: string;
  proPrice: number;
  proQuantity: number;
  // proDiscountPercent: number;
};
