import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  async getSession(@Session() session: Record<string, any>) {
    console.log(session.id);
  }
}
