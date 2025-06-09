import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';

describe('AppService', () => {
  let service: AppService;
  let mockClient: ClientProxy;

  beforeEach(() => {
    mockClient = {
      send: jest.fn(() => of(10)),
    } as unknown as jest.Mocked<ClientProxy>;

    service = new AppService(mockClient);
  });

  describe('sendDouble()', () => {
    it('should send a number to the microservice and return the result', async () => {
      const result = await service.sendDouble(5);
      expect(result).toBe(10);
      expect(mockClient.send).toHaveBeenCalledWith('double_number', 5);
      expect(mockClient.send).toHaveBeenCalledTimes(1);
    });
  });
});
