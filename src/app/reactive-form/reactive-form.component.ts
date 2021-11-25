import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {F} from "@angular/cdk/keycodes";


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  profileForm: FormGroup;


  constructor() {


  }

  ngOnInit(): void {
    this.profileForm = new FormGroup(
      {
        firstName: new FormControl('Anna', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
        lastName: new FormControl('Nieminen', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
        personId: new FormControl('112233-1231', [Validators.required, Validators.minLength(11)]),
        email: new FormControl('anna.nieminen@joku.fi', [Validators.required, Validators.email]),
        username: new FormControl('aassdd', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]),
        password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z ]*$')]),
        passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z ]*$')]),
        termAndConditions: new FormControl('', [Validators.requiredTrue]),
      })
  };


  onSubmit() {


    console.log('profileForm.value: ' + this.profileForm.value);
    console.log('profileForm.value: ' + this.profileForm.value.firstName);
    console.log('profileForm.value: ' + this.profileForm.valid);
    this.profileForm.reset();

    console.warn('profileForm.value: ' + this.profileForm.value.firstName);
    console.warn('profileForm.valid: ' + this.profileForm.valid);
    this.profileForm.reset();
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get personId() {
    return this.profileForm.get('personId');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get username() {
    return this.profileForm.get('username');
  }

  get password() {
    return this.profileForm.get('password');
  }

  get passwordConfirm() {
    return this.profileForm.get('passwordConfirm')
  }

  get termsAndConditions() {
    return this.profileForm.get('termsAndConditions')
  }
}

