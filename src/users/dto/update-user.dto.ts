import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  public name: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  public password: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  public cpf: string;
}
