import { IsString, IsOptional } from 'class-validator';

export class CreateLogDto {
  @IsString()
  description: string;

  @IsString()
  date?: Date;

  @IsOptional()
  @IsString()
  checkIn?: string;

  @IsOptional()
  @IsString()
  checkOut?: string;
}
