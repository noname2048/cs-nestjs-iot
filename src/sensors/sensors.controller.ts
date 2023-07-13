import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateSensorDto } from './dtos/create-sensor.dto';
import { SensorsService } from './sensors.service';
import type { Sensor } from '~/sensors/entities/sensor.entity';

@Controller()
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Get('/sensors')
  getAll(): Promise<Sensor[]> {
    return this.sensorsService.sensors({ where: {} });
  }

  @Get('/sensor')
  getOne(@Query('uuid') uuid: string): Promise<Sensor> {
    if (!uuid)
      throw new HttpException(
        'uuid is required',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    return this.sensorsService.sensor({ uuid });
  }

  @Post('/sensor')
  create(@Body() createSensorDto: CreateSensorDto): Promise<Sensor> {
    return this.sensorsService.createSensor(createSensorDto);
  }
}
