import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // REST handler
  @Get('double/:num')
  async double(@Param('num') num: string): Promise<number> {
    const input = parseFloat(num);
    return this.appService.sendDouble(input);
  }
}
