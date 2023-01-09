import { Module } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { SurveysController } from './surveys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Survey from './entities/survey.entity';
import { SurveyQuestionModule } from 'src/survey-question/survey-question.module';
import { SurveyResponseModule } from 'src/survey-response/survey-response.module';

@Module({
  imports: [
    SurveyResponseModule,
    SurveyQuestionModule,
    TypeOrmModule.forFeature([Survey]),
  ],
  controllers: [SurveysController],
  providers: [SurveysService],
})
export class SurveysModule {}
