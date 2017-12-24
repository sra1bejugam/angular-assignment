import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  start:number;
  limit:number;
  imagelist: Image[];
  constructor(private _imageser:Image){
    this.start=0;
    this.limit=10;
  }
   constructor(private dataService:DataService) {
   }
   ngOnInit() {
   console.log(this.dataService.data);
  
      this.someProperty = this.dataService.myData();
  }
ngOnInit(){
  this._imageser=this.image(this.start,this.limit);
}
}

