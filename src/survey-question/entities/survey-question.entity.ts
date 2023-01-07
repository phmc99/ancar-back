import SurveyResponse from '../../survey-response/entities/survey-response.entity';
import Survey from '../../surveys/entities/survey.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export default class SurveyQuestion {
  @PrimaryGeneratedColumn('uuid')
  cod: string;

  @Column()
  description: string;

  @ManyToOne(() => Survey, (survey) => survey.questions)
  survey: Survey;

  @OneToMany(() => SurveyResponse, (survey) => survey.question)
  responses: SurveyResponse[];
}
