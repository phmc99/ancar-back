import { IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { ISurveyQuestion } from 'src/types';

export class CreateSurveyDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  public questions: ISurveyQuestion[];
}
