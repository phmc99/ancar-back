import { Module } from '@nestjs/common';
import { SurveyResponseService } from './survey-response.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import SurveyResponse from './entities/survey-response.entity';
import { UsersModule } from 'src/users/users.module';
import { SurveyQuestionModule } from 'src/survey-question/survey-question.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SurveyResponse]),
    UsersModule,
    SurveyQuestionModule,
  ],
  providers: [SurveyResponseService],
  exports: [SurveyResponseService],
})
export class SurveyResponseModule {}
