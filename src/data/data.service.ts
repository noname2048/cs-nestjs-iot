import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Data, Prisma } from '@prisma/client';
import { CreateDataDto } from './dtos/create-data.dto';

@Injectable()
export class DataService {
  constructor(private prisma: PrismaService) {}

  async createData(_data: CreateDataDto): Promise<Data> {
    return await this.prisma.data.create({ data: { ..._data } });
  }

  async queryData(param: {
    where: Prisma.DataWhereInput;
    take: number;
  }): Promise<Data[]> {
    const { where, take } = param;
    return await this.prisma.data.findMany({ where, take });
  }
}
