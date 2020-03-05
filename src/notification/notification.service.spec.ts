import { Test, TestingModule } from '@nestjs/testing';
import { notificationService } from './notification.service';

describe('notificationService', () => {
  let service: notificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [notificationService],
    }).compile();

    service = module.get<notificationService>(notificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
