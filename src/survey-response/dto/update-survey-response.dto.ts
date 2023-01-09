import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateSurveyResponseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public description: string;
}
