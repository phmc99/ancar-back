import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSurveyQuestionDto } from './dto/create-survey-question.dto';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';
import SurveyQuestion from './entities/survey-question.entity';

@Injectable()
export class SurveyQuestionService {
  constructor(
    @InjectRepository(SurveyQuestion)
    private surveyQuestionsRepository: Repository<SurveyQuestion>,
  ) {}

  async create(createSurveyQuestionDto: CreateSurveyQuestionDto[]) {
    const surveyQuestions = this.surveyQuestionsRepository.create(
      createSurveyQuestionDto,
    );
    await this.surveyQuestionsRepository.save(surveyQuestions);
    return surveyQuestions;
  }

  async findOne(cod: string) {
    const question = await this.surveyQuestionsRepository.findOneBy({ cod });
    return { question };
  }

  async update(updateSurveyQuestionDto: UpdateSurveyQuestionDto[]) {
    const updatedSurveyQuestion = await this.surveyQuestionsRepository.save(
      updateSurveyQuestionDto,
    );
    return updatedSurveyQuestion;
  }
}
