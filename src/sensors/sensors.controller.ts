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
import type { Sensor } from '@src/sensors/entities/sensor.entity';

@Controller()
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  /**
   * Create a new sensor
   *
   * @param createSensorDto
   */
  @Post('/sensor')
  create(@Body() createSensorDto: CreateSensorDto): Promise<Sensor> {
    return this.sensorsService.createSensor(createSensorDto);
  }

  @Get('/sensors')
  getAll(@Query('name') name?: string): Promise<Sensor[]> {
    return this.sensorsService.sensors({
      where: {
        name: {
          in: name,
        },
      },
    });
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
}
