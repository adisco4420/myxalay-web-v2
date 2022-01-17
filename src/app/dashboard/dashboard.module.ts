import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashLayoutComponent } from './dash-layout/dash-layout.component';
import { DashSidebarComponent } from './dash-sidebar/dash-sidebar.component';


@NgModule({
  declarations: [DashLayoutComponent, DashSidebarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
