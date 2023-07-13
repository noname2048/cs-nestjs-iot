import { Controller, Get, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';
import { Data, Prisma } from '@prisma/client';
import { CreateDataDto } from './dtos/create-data.dto';

@Controller()
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post('/data')
  create(@Body() data: CreateDataDto) {
    return this.dataService.createData(data);
  }
}
