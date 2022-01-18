import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpportunitiesRoutingModule } from './job-opportunities-routing.module';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';


@NgModule({
  declarations: [
    ApplicantProfileComponent
  ],
  imports: [
    CommonModule,
    JobOpportunitiesRoutingModule
  ]
})
export class JobOpportunitiesModule { }
