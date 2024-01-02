import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-session-id')
  async getSession(@Session() session: Record<string, any>) {
    return session.id;
  }
}
