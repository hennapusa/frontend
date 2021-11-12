export class Question {
  question: string;
  answer: string;

  constructor(message: string){
    this.question=message;
    this.answer='Not answered yet';

  }
  setAnswer(value: any){
    if(value==1){this.answer="huono";}
      else if (value==2){this.answer="välttävä";}
      else if(value==3){this.answer="OK";}
      else if(value==4){this.answer="hyvä";}

  }

}

