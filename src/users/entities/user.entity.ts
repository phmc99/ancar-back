import SurveyResponse from '../../survey-response/entities/survey-response.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  cod: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @OneToMany(() => SurveyResponse, (responses) => responses.user)
  responses: SurveyResponse[];
}
