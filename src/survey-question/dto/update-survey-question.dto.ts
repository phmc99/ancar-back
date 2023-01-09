import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import Survey from 'src/surveys/entities/survey.entity';

export class UpdateSurveyQuestionDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  public survey: Survey;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public description: string;
}
