import { IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsString()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
