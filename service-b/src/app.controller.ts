import { Controller, Get, Param } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Redis handler
  @MessagePattern('double_number')
  handleDouble(@Payload() num: number): number {
    return this.appService.double(num);
  }

  // REST handler
  @Get('square/:num')
  getSquare(@Param('num') num: string): number {
    const input = parseFloat(num);
    return this.appService.square(input);
  }
}
