import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSurveyQuestionDto {
  @IsString()
  @IsNotEmpty()
  public surveyCod: string;

  @IsString()
  @IsNotEmpty()
  public description: string;
}
