import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {FormComponent} from "./form/form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {CinemaComponent} from "./cinema/cinema.component";

const routes: Routes = [
  {path: 'calculator', component: CalculatorComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'form', component: FormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: '', redirectTo: 'calculator', pathMatch: 'full'},
  {path: 'cinema', component: CinemaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
