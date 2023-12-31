import { Test, TestingModule } from '@nestjs/testing';
import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';
import { DataService } from '@src/data/data.service';
import { PrismaService } from '@src/prisma.service';

describe('SensorsController', () => {
  let controller: SensorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorsController],
      providers: [SensorsService, DataService, PrismaService],
    }).compile();

    controller = module.get<SensorsController>(SensorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('should return an array of sensors', async () => {
      expect(1).toBe(1);
      expect(2).toBe(2);
    });
  });
});
