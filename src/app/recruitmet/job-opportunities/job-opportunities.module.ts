import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpportunitiesRoutingModule } from './job-opportunities-routing.module';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { CreateJobApplicationComponent } from './create-job-application/create-job-application.component';


@NgModule({
  declarations: [
    ApplicantProfileComponent,
    CreateJobApplicationComponent
  ],
  imports: [
    CommonModule,
    JobOpportunitiesRoutingModule
  ]
})
export class JobOpportunitiesModule { }
