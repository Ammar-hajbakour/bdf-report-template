import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullReportComponent } from './components/full-report/full-report.component';
import { StepperComponent } from './components/stepper/stepper.component';

const routes: Routes = [
  {path:'', component: FullReportComponent},
  {path:'stepper', component: StepperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
