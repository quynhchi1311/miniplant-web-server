import { OrderStatus } from 'src/utils/enums';

export class CreateOrderDto {
  orderDate: Date;
  orderPreTotal: number;
  orderTotal: number;
  orderStatus: OrderStatus;
  cusID?: number;
}
