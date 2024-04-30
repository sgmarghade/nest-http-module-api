import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export class CreateEmployeeDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  @IsString()
  gender: Gender;

  @IsNotEmpty()
  @IsString()
  status: string;
}
