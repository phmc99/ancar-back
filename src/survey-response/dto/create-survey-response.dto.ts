import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSurveyResponseDto {
  @IsString()
  @IsNotEmpty()
  public userCod: string;

  @IsString()
  @IsNotEmpty()
  public description: string;
}
