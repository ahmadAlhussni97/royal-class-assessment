import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('REDIS_CLIENT') private client: ClientProxy) {}

  async sendDouble(num: number): Promise<number> {
    return await firstValueFrom(this.client.send('double_number', num));
  }
}
