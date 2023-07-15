import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { DataService } from './data.service';
import { Data, Prisma } from '@prisma/client';
import { SensorsService } from '../sensors/sensors.service';
import { CreateDataDto } from './dtos/create-data.dto';
import type { Sensor } from '@src/sensors/entities/sensor.entity';
import { HttpException } from '@nestjs/common';

@Controller()
export class DataController {
  constructor(
    private readonly dataService: DataService,
    private readonly sensorsService: SensorsService,
  ) {}

  @Get('/data')
  currentData(@Query('uuid') uuid: string) {
    const sensor = this.sensorsService.sensor({ uuid });

    if (!sensor) throw new HttpException('Sensor not found', 400);
    return this.dataService.currentData(new Date(), uuid);
  }

  @Post('/data')
  create(@Body() data: CreateDataDto) {
    const sensor = this.sensorsService.sensor({
      uuid: data.sensorUuid,
    });

    if (!sensor) throw new HttpException('Sensor not found', 400);
    return this.dataService.createData(data);
  }
}
