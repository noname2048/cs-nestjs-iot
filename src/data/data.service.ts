import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Data, Prisma } from '@prisma/client';
import { CreateDataDto } from './dtos/create-data.dto';
import { sub } from 'date-fns';

@Injectable()
export class DataService {
  constructor(private prisma: PrismaService) {}

  async createData(_data: CreateDataDto): Promise<Data> {
    return await this.prisma.data.create({ data: { ..._data } });
  }

  async currentData(current: Date, uuid: string): Promise<Data[]> {
    if (!current) current = new Date();
    return await this.prisma.data.findMany({
      where: {
        createdAt: {
          gte: sub(current, { hours: 24 }),
          lte: current,
        },
        sensorUuid: {
          equals: uuid,
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
      take: 2000,
    });
  }

  async oneData(current: Date): Promise<Data[]> {
    if (!current) current = new Date();
    return await this.prisma.data.findMany({
      where: {
        createdAt: {
          gte: sub(current, { hours: 1 }),
          lte: current,
        },
      },
      take: 1,
    });
  }
}
