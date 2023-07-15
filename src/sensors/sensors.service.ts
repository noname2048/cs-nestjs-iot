import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSensorDto } from '@src/sensors/dtos/create-sensor.dto';
import { PrismaService } from '../prisma.service';
import { Sensor, Prisma } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SensorsService {
  constructor(private Prisma: PrismaService) {}

  async createSensor(createSensorDto: CreateSensorDto) {
    const uuid = uuidv4();
    const data = { ...createSensorDto, uuid };
    return await this.Prisma.sensor.create({
      data,
    });
  }

  async sensors(params: {
    where?: Prisma.SensorWhereInput;
    orderBy?: Prisma.SensorOrderByWithRelationInput;
  }) {
    const { where, orderBy } = params;
    return await this.Prisma.sensor.findMany({
      where,
      orderBy,
    });
  }

  async sensor(sensorWhereUniqueInput: Prisma.SensorWhereUniqueInput) {
    const data = await this.Prisma.sensor.findUnique({
      where: sensorWhereUniqueInput,
    });
    if (!data) throw new NotFoundException('Sensor not found');
    return data;
  }
}
