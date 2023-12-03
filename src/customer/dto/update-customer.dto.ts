import { Gender } from 'src/utils/enums';

export class UpdateCustomerDto {
  cusName: string;
  cusGender: Gender;
  cusBirthDate: Date;
  cusAdd: string;
  cusPhone: string;
  cusEmail: string;
  accPassword: string;
  accCreatedDate: Date;
  roleID: number;
}
