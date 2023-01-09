import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSurveyResponseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public userCod: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public questionCod: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public description: string;
}
