import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './dashboard/filter.pipe';
import {RouterModule} from '@angular/router';
import { ShadowDirective } from './dashboard/shadow.directive';
import { InfoComponent } from './info/info.component';
import { PostsComponent } from '../posts/posts.component';
import { TodoComponent } from '../todo/todo.component';
import { ImageComponent } from '../image/image.component';
// import { appService } from './empservice';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'students', component: DashboardComponent },
      { path: 'photos', component: ImageComponent },
      {path:'posts', component : PostsComponent},
      {path:'todo', component :  TodoComponent},
      { path: 'info/:name', component: InfoComponent },
     {path: '',redirectTo:'welcome', pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  // providers:[appService],
  declarations: [ DashboardComponent, FilterPipe, ShadowDirective, InfoComponent, PostsComponent,
    TodoComponent,
    ImageComponent],
  exports:[DashboardComponent]
})
export class DashboardModule {
 }
