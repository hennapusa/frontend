import { Component, OnInit } from '@angular/core';
import {Question} from "../question";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  questions:Array<Question>=
    [
      new Question("Kysymys 1"),
      new Question("Kysymys 2"),
      new Question("Kysymys 3"),
];


  constructor() {

  }

  ngOnInit(): void {
  }
  onInputChange(event: any, q:Question){
console.log(event.value);
    console.log(q.question);
    q.setAnswer(event.value);

  }



}
