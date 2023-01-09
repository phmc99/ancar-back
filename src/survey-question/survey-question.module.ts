import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import SurveyQuestion from './entities/survey-question.entity';
import { SurveyQuestionService } from './survey-question.service';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyQuestion])],
  providers: [SurveyQuestionService],
  exports: [SurveyQuestionService],
})
export class SurveyQuestionModule {}
