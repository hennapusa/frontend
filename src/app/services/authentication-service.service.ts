import {ValueTransformer} from '@angular/compiler/src/util';
import {Injectable, NgZone} from '@angular/core';
//import { AngularFireAuth } from "firebase/app";
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {__values} from 'tslib';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private dialogConfig: any;

  constructor(public afAuth: AngularFireAuth, public router: Router, public dialog: MatDialog) {
    this.afAuth.authState.subscribe((user: any) => {
      if (user != null) this.userEmail.next(user.email);
    });
  }

  login(email: any, password: any) {

    console.log("heipähei" + email + password);
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        //email.next(value: T);
        console.log("eee: " + email + password);
        this.userEmail.next(email);
        this.router.navigate(['maintenance']);

      })
      .catch((error: any) => {
        this.openDialog();
        console.log(error.message);
        console.log("error ilmoitus: " + email + password);

      })
  }

  logOut() {
    return this.afAuth.signOut().then(() => {
      //this.userEmail = new BehaviorSubject<string>('');
      this.userEmail.next('');
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

  checkLogedInUser() {
    console.log(this.userEmail + 'tämä tieto tulee palvelun check Logged in user-metodista')
    //palauttaa kirjautuneen käyttäjän sähköpostin
    return this.userEmail;

  }

  getLoggedInUser(): any {
    //funktiota kutsutaan canActivate()-funktiossa
    return this.afAuth.authState;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Dialog'
    };
    this.dialog.open(DialogComponent, dialogConfig);
  }
}

