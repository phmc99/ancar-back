import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { SurveyResponseService } from 'src/survey-response/survey-response.service';
import { CreateSurveyResponseDto } from 'src/survey-response/dto/create-survey-response.dto';
import { UpdateSurveyResponseDto } from 'src/survey-response/dto/update-survey-response.dto';
import { SurveyQuestionService } from 'src/survey-question/survey-question.service';

@Controller('surveys')
export class SurveysController {
  constructor(
    private readonly surveysService: SurveysService,
    private readonly surveyQuestionService: SurveyQuestionService,
    private readonly surveyResponseService: SurveyResponseService,
  ) {}

  @Post()
  create(@Body() createSurveyDto: CreateSurveyDto) {
    return this.surveysService.create(createSurveyDto);
  }

  @Get()
  findAll() {
    return this.surveysService.findAll();
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.surveysService.findOne(cod);
  }

  @Patch(':cod')
  updatePatch(
    @Param('cod') cod: string,
    @Body() updateSurveyDto: UpdateSurveyDto,
  ) {
    return this.surveysService.update(cod, updateSurveyDto);
  }

  @Delete(':cod')
  remove(@Param('cod') cod: string) {
    return this.surveysService.remove(cod);
  }

  // Response Controllers //

  @Post(':surveyCod/responses')
  createResponse(
    @Param('surveyCod') surveyCod: string,
    @Body() createSurveyResponseDto: CreateSurveyResponseDto,
  ) {
    return this.surveyResponseService.create(
      surveyCod,
      createSurveyResponseDto,
    );
  }

  @Get(':surveyCod/responses')
  findAllBySurvey(@Param('surveyCod') surveyCod: string) {
    return this.surveyResponseService.findBySurvey(surveyCod);
  }

  @Get('/questions/:questionCod/responses')
  findAllResponsesByQuestion(@Param('questionCod') questionCod: string) {
    return this.surveyResponseService.findByQuestion(questionCod);
  }

  @Patch(':surveyCod/responses/:responseCod')
  updateResponse(
    @Param('responseCod') responseCod: string,
    @Body() updateSurveyResponseDto: UpdateSurveyResponseDto,
  ) {
    return this.surveyResponseService.update(
      responseCod,
      updateSurveyResponseDto,
    );
  }

  @Delete(':surveyCod/responses/:responseCod')
  removeResponse(@Param('responseCod') responseCod: string) {
    return this.surveyResponseService.remove(responseCod);
  }
}
