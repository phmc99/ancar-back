import { Module } from '@nestjs/common';
import { SurveyResponseService } from './survey-response.service';
import { SurveyResponseController } from './survey-response.controller';

@Module({
  controllers: [SurveyResponseController],
  providers: [SurveyResponseService],
})
export class SurveyResponseModule {}
