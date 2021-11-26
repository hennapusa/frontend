import {Injectable} from '@angular/core';
import {Question} from "../question";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() {
  }

  questions: Array<Question> = [
    new Question("Kysymys 1"),
    new Question("Kysymys 2"),
    new Question("Kysymys 3"),
  ];

  getQuestions(): any {
    return this.questions;
  }

}
