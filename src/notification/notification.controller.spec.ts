import { Test, TestingModule } from '@nestjs/testing';
import { notificationController } from './notification.controller';

describe('notification Controller', () => {
  let controller: notificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [notificationController],
    }).compile();

    controller = module.get<notificationController>(notificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
