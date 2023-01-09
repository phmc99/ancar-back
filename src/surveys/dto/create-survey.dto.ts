import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { ISurveyQuestion } from 'src/types';

export class CreateSurveyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public description: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  @ApiProperty()
  public questions: ISurveyQuestion[];
}
