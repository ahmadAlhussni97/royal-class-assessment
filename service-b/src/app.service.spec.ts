import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  describe('double()', () => {
    it('should return the number multiplied by 2', () => {
      expect(service.double(5)).toBe(10);
      expect(service.double(-3)).toBe(-6);
      expect(service.double(0)).toBe(0);
      expect(service.double(2.5)).toBe(5);
    });
  });

  describe('square()', () => {
    it('should return the number squared', () => {
      expect(service.square(5)).toBe(25);
      expect(service.square(-3)).toBe(9);
      expect(service.square(0)).toBe(0);
      expect(service.square(2.5)).toBe(6.25);
    });
  });
});
