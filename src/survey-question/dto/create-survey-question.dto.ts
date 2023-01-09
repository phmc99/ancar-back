import { IsString, IsNotEmpty } from 'class-validator';
import Survey from 'src/surveys/entities/survey.entity';

export class CreateSurveyQuestionDto {
  @IsString()
  @IsNotEmpty()
  public survey: Survey;

  @IsString()
  @IsNotEmpty()
  public description: string;
}
