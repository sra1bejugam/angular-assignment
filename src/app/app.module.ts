import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {RouterModule} from '@angular/router';
import {WelcomeComponent}from './welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { empservice } from './empservice.ts.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    empservice.tscomponent

  ],

  imports: [
    BrowserModule,
    DashboardModule,
    HttpClientModule,    
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {path: '',redirectTo:'welcome', pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
