export class UpdateCouponDto {
  couponID: number;
  couponCode: string;
  couponName: string;
  couponDescr: string;
  maxDiscountValue: number;
  discountPercent: number;
  startDate: Date;
  endDate: Date;
}
