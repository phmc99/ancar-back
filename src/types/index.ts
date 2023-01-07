export interface IUser {
  cod: string;
  name: string;
  cpf: string;
  password: string;
  responses: ISurveyResponse[];
}

export interface ISurvey {
  cod: string;
  name: string;
  description: string;
  questions: ISurveyQuestion[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ISurveyResponse {
  cod: string;
  description: string;
  question: ISurveyQuestion;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISurveyQuestion {
  cod: string;
  description: string;
  survey: ISurvey;
  responses: ISurveyResponse[];
}