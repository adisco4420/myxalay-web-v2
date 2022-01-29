import { CreateJobApplicationComponent } from './create-job-application/create-job-application.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ApplicantProfileComponent},
  { path: 'create-job-application', component: CreateJobApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOpportunitiesRoutingModule { }
