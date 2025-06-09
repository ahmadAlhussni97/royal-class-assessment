import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  double(num: number): number {
    return num * 2;
  }

  square(num: number): number {
    return num * num;
  }
}
