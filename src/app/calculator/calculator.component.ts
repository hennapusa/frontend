import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
this.result='';
  }

  ngOnInit(): void {
  }
  result: any;
  buttons: string[] =
    ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];

  addValue(value: any) {

    console.log('addValue value: ' + value);

try{
    if (value == '=') {

      this.result = eval(this.result);
      console.log('lausekkeen arvo on: ' + eval('2+2'));
    }
    else if (value=='C'){
      this.result='';
    }
      else{
        this.result=this.result.concat(value);
      }
    }
  catch(e){
    this.result='ERROR';
  }
}
}
