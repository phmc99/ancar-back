import SurveyQuestion from '../../survey-question/entities/survey-question.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Survey {
  @PrimaryGeneratedColumn('uuid')
  cod: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => SurveyQuestion, (question) => question.survey, {
    eager: true,
  })
  questions: SurveyQuestion[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
