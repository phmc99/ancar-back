import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateSurveyResponseDto {
  @IsString()
  @IsOptional()
  public userCod: string;

  @IsString()
  @IsNotEmpty()
  public description: string;
}
