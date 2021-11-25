import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {Person} from "../person";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  person: Person;

  constructor() {
  this.person = new Person();

  }

  ngOnInit(): void {

  }

  submit(form: any) {
    console.log("User information:");
    console.log('first name: ' + form.value.firstName);
    console.log('last name: ' + form.value.lastName);
    console.log('identification number: ' + form.value.id);
    console.log('email: ' + form.value.email);
    console.log('username: ' + form.value.userName);
    console.log("--------------------------------------");
    form.reset();

   /* this.person.firstName='';
    this.person.lastName='';
    this.person.id='';
    this.person.email='';
    this.person.userName='';*/

  }

}
