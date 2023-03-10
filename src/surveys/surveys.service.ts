import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginateResponse } from 'src/helpers';
import { SurveyQuestionService } from 'src/survey-question/survey-question.service';
import { IFindQuery } from 'src/types';
import { Repository } from 'typeorm';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import Survey from './entities/survey.entity';

@Injectable()
export class SurveysService {
  constructor(
    private readonly surveyQuestionService: SurveyQuestionService,
    @InjectRepository(Survey)
    private surveysRepository: Repository<Survey>,
  ) {}

  async create(createSurveyDto: CreateSurveyDto) {
    const survey = this.surveysRepository.create(createSurveyDto);
    await this.surveysRepository.save(survey);

    const mapQuestions = createSurveyDto.questions.map((item) => {
      return { ...item, survey };
    });

    const questions = await this.surveyQuestionService.create(mapQuestions);

    await this.surveysRepository.save({
      ...survey,
      questions,
    });

    return {
      cod: survey.cod,
      name: survey.name,
      description: survey.description,
      createdAt: survey.createdAt,
      updatedAt: survey.updatedAt,
      questions: questions.map((item) => {
        return {
          cod: item.cod,
          description: item.description,
        };
      }),
    };
  }

  async findAll(query: IFindQuery) {
    const take = +query.take || 10;
    const page = +query.page || 1;
    const skip = (page - 1) * take;

    const surveys = await this.surveysRepository.findAndCount({
      order: { createdAt: 'DESC' },
      take: take,
      skip: skip,
    });

    return paginateResponse(surveys, page, take);
  }

  async findOne(cod: string) {
    const survey = await this.surveysRepository.findOneBy({ cod });
    return { survey };
  }

  async update(cod: string, updateSurveyDto: UpdateSurveyDto) {
    let body: UpdateSurveyDto = { ...updateSurveyDto };
    const survey = await this.surveysRepository.findOneBy({ cod });

    if (body.questions && body.questions.length > 0) {
      const questions = await this.surveyQuestionService.update(body.questions);
      body = { ...body, questions };
    }

    const updatedSurvey = await this.surveysRepository.save({
      ...survey,
      ...body,
    });

    return { updatedSurvey };
  }

  async remove(cod: string) {
    await this.surveysRepository.delete(cod);
    return { message: `survey ${cod} deleted` };
  }
}
