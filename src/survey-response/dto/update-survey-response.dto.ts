import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateSurveyResponseDto {
  @IsString()
  @IsNotEmpty()
  public description: string;
}
