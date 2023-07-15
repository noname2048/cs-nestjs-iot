import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorsModule } from './sensors/sensors.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [SensorsModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
