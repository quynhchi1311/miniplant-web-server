import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserParams } from 'src/utils/types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('customer')
  signInCustomer(@Body() createAuthDto: LoginUserParams) {
    return this.authService.signInCustomer(createAuthDto);
  }

  @Post('employee')
  signInEmployee(@Body() createAuthDto: LoginUserParams) {
    return this.authService.signInEmployee(createAuthDto);
  }
}
