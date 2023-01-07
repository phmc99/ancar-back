import {
  IsString,
  IsArray,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { ISurveyQuestion } from 'src/types';

export class UpdateSurveyDto {
  @IsOptional()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public description: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  public questions: ISurveyQuestion[];
}
