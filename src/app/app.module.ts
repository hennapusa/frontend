import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestiComponent } from './testi/testi.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { CalculatorComponent } from './calculator/calculator.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { FeedbackComponent } from './feedback/feedback.component';
import {MatSliderModule} from "@angular/material/slider";



@NgModule({
  declarations: [
    AppComponent,
    TestiComponent,
    CalculatorComponent,
    FeedbackComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatSliderModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
