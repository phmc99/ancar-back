import SurveyQuestion from '../../survey-question/entities/survey-question.entity';
import User from '../../users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export default class SurveyResponse {
  @PrimaryGeneratedColumn('uuid')
  cod: string;

  @Column()
  description: string;

  @Column()
  surveyCod: string;

  @ManyToOne(() => SurveyQuestion, (question) => question.responses)
  question: SurveyQuestion;

  @ManyToOne(() => User, (user) => user.responses)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
