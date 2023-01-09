import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public cpf: string;
}
