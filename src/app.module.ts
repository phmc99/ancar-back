import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SurveysModule } from './surveys/surveys.module';
import { SurveyQuestionModule } from './survey-question/survey-question.module';
import { SurveyResponseModule } from './survey-response/survey-response.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: process.env.PROD ? false : true,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    UsersModule,
    SurveysModule,
    SurveyQuestionModule,
    SurveyResponseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
