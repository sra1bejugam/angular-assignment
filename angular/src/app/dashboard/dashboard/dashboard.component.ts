import { Component, OnInit } from '@angular/core';
import { FilterPipe} from './filter.pipe';
import{appService} from '../empservice';
import { Istudents } from '../casesen';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[appService]
})
export class DashboardComponent implements OnInit {
  products : Istudents[]; 
  constructor (dashcomp : appService,private _dbservice:appService) 
  {
    this._dbservice=dashcomp; 
  }
 ngOnInit():void {
    this.products=this._dbservice.getstudents();
}
}