import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserParams } from 'src/utils/types';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from 'src/customer/customer.service';
import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CustomerService) private customerService: CustomerService,
    @Inject(EmployeeService) private employeeService: EmployeeService,
    private jwtService: JwtService,
  ) {}

  async signInCustomer(loginUserParams: LoginUserParams) {
    const { userName, userPassword } = loginUserParams;

    const user = await this.customerService.findByUsername(userName);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (this.comparePasswords(userPassword, user.accPassword)) {
    // if (userPassword === user.accPassword) {
      const payload = { userID: user.cusID, roleID: user.roleID };
      return {
        data: payload,
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    throw new UnauthorizedException();
  }

  async signInEmployee(loginUserParams: LoginUserParams) {
    const { userName, userPassword } = loginUserParams;

    const user = await this.employeeService.findByUsername(userName);
    if (!user) {
      throw new UnauthorizedException();
    }
    // if (this.comparePasswords(userPassword, user.userPassword)) {
    if (userPassword === user.accPassword) {
      const payload = { userID: user.empID, role: user.role };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    throw new UnauthorizedException();
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  async comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
