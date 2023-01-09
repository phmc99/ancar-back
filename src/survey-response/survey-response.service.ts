import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SurveyQuestionService } from 'src/survey-question/survey-question.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateSurveyResponseDto } from './dto/create-survey-response.dto';
import { UpdateSurveyResponseDto } from './dto/update-survey-response.dto';
import SurveyResponse from './entities/survey-response.entity';

@Injectable()
export class SurveyResponseService {
  constructor(
    private readonly surveyQuestionService: SurveyQuestionService,
    private readonly userService: UsersService,
    @InjectRepository(SurveyResponse)
    private surveyResponsesRepository: Repository<SurveyResponse>,
  ) {}

  async create(
    surveyCod: string,
    createSurveyResponseDto: CreateSurveyResponseDto,
  ) {
    const { user } = await this.userService.findOne(
      createSurveyResponseDto.userCod,
    );

    const { question } = await this.surveyQuestionService.findOne(
      createSurveyResponseDto.questionCod,
    );

    const body = {
      description: createSurveyResponseDto.description,
      user,
      question,
      surveyCod,
    };

    const response = this.surveyResponsesRepository.create(body);
    await this.surveyResponsesRepository.save(response);

    return {
      cod: response.cod,
      description: response.description,
      question: response.question.cod,
      user: response.user.cod,
      survey: response.user.cod,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    };
  }

  async findByQuestion(questionCod: string) {
    const { question } = await this.surveyQuestionService.findOne(questionCod);
    const responses = await this.surveyResponsesRepository.find({
      where: { question },
    });

    return { responses };
  }

  async findBySurvey(surveyCod: string) {
    const responses = await this.surveyResponsesRepository.find({
      where: { surveyCod },
    });

    return { responses };
  }

  async update(cod: string, updateSurveyResponseDto: UpdateSurveyResponseDto) {
    const response = await this.surveyResponsesRepository.findOneBy({ cod });

    const updatedResponses = await this.surveyResponsesRepository.save({
      ...response,
      description: updateSurveyResponseDto.description,
    });
    return { updatedResponses };
  }

  async remove(cod: string) {
    await this.surveyResponsesRepository.delete(cod);
    return { message: `survey response ${cod} deleted` };
  }
}
