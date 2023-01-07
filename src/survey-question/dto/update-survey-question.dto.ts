import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateSurveyQuestionDto {
  @IsString()
  @IsOptional()
  public surveyCod: string;

  @IsString()
  @IsNotEmpty()
  public description: string;
}
