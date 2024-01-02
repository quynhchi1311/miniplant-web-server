import { OrderStatus } from 'src/utils/enums';

export class UpdateOrderDto {
  orderDate: Date;
  orderPreTotal: number;
  orderTotal: number;
  orderStatus: OrderStatus;
  cusID?: number;
}