import { Test, TestingModule } from '@nestjs/testing';
import { SensorsService } from './sensors.service';
import { PrismaService } from '@src/prisma.service';

describe('SensorsService', () => {
  let service: SensorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorsService, PrismaService],
    }).compile();

    service = module.get<SensorsService>(SensorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
