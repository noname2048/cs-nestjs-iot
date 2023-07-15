import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateDataDto {
  @IsUUID()
  @IsNotEmpty()
  sensorUuid: string;

  @IsNotEmpty()
  @IsNumber()
  temperature: number;

  @IsNotEmpty()
  @IsNumber()
  humidity: number;
}
