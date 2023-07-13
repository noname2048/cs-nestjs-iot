import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDataDto {
  @IsString()
  @IsNotEmpty()
  sensorUuid: string;

  @IsNotEmpty()
  @IsNumber()
  temperature: number;

  @IsNotEmpty()
  @IsNumber()
  humidity: number;
}
