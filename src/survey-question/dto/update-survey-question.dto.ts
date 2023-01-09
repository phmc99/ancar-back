import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import Survey from 'src/surveys/entities/survey.entity';

export class UpdateSurveyQuestionDto {
  @IsString()
  @IsOptional()
  public survey: Survey;

  @IsString()
  @IsNotEmpty()
  public description: string;
}
