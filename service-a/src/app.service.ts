import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('REDIS_CLIENT') private client: ClientProxy) {}

  async sendDouble(num: number): Promise<number> {
    try {
      return await firstValueFrom(this.client.send('double_number', num));
    } catch (err) {
      console.error('Redis sendDouble error:', err);
      throw new HttpException(
        'Service B is unavailable',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
