import { Module } from '@nestjs/common';
import { SensorsService } from '../sensors/sensors.service';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [DataController],
  providers: [DataService, PrismaService, SensorsService],
})
export class DataModule {}
