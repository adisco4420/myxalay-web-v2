import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashLayoutComponent } from './dash-layout/dash-layout.component';

const routes: Routes = [
  {
    path: '', component: DashLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('../recruitmet/recruitmet.module').then(m => m.RecruitmetModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
