import { Module } from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';

@Module({
  controllers: [],
  providers: [SurveyQuestionService],
})
export class SurveyQuestionModule {}
