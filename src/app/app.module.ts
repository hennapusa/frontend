import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TestiComponent} from './testi/testi.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {CalculatorComponent} from './calculator/calculator.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {FeedbackComponent} from './feedback/feedback.component';
import {MatSliderModule} from "@angular/material/slider";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {FormComponent} from './form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CinemaComponent} from './cinema/cinema.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {HttpClientModule} from "@angular/common/http";
import { NewsFilterPipe } from './Pipes/news-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestiComponent,
    CalculatorComponent,
    FeedbackComponent,
    ToolbarComponent,
    FormComponent,
    ReactiveFormComponent,
    CinemaComponent,
    NewsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
