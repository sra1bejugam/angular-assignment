import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {RouterModule} from '@angular/router';
import {WelcomeComponent}from './welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import{appService} from './dashboard/empservice';
import { DataService } from './data.service';
import { InfoComponent } from '../app/dashboard/info/info.component';
import * as _ from 'underscore';
import { todoservice } from './todo/todoservice.service';
import { postservice } from './posts/pservice';
import { PagingService } from './paging.service';
import { AlertModule } from 'ngx-bootstrap';
import { interceptor } from '../app/posts/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],

  imports: [
    BrowserModule,
    DashboardModule,
    HttpClientModule,    
    RouterModule.forRoot([
      { path: 'students', component: DashboardComponent },
      { path: 'info/:name', component: InfoComponent },
      { path: 'welcome', component: WelcomeComponent },
      {path: '',redirectTo:'welcome', pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  providers: [appService,DataService,postservice,todoservice,PagingService,{provide:HTTP_INTERCEPTORS, useClass: interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
