import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './dashboard/filter.pipe';
import {RouterModule} from '@angular/router';
import { ShadowDirective } from './dashboard/shadow.directive';
import { InfoComponent } from './info/info.component';
//import { Empservice } from './empservice.ts/empservice.ts.component';
import { EmpserviceComponent } from './empservice/empservice.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'students', component: DashboardComponent },
      { path: 'info/:name', component: InfoComponent },
     {path: '',redirectTo:'welcome', pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  declarations: [ DashboardComponent, FilterPipe, EmpserviceComponent, ShadowDirective, InfoComponent],
  exports:[DashboardComponent]
})
export class DashboardModule {
 }
