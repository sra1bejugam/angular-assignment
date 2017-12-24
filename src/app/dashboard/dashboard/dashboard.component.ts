import { Component, OnInit } from '@angular/core';
import { FilterPipe} from './filter.pipe';
import{EmpService} from './dashboard/empservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[appservice]
})
export class DashboardComponent implements OnInit {}
  private _dbservice:appservice;
  constructor(dashcomp:appservice) 
  {
    this._dbservice=dashcomp; 
  }
  ngOnInit():void {
    this.products=this._dbservice.getproducts();
  }

