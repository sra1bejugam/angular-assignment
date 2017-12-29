import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import{Image} from '../image';
import { PagingService } from '../paging.service'
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  start : number;
  limit : number;
  currenturl : string;
  imagelist: Image[];
  pagination: any = {};
  pagedItems: any[];

  constructor(private imageser : DataService,private pagerService: PagingService) { 
    this.start=0;
    this.limit=10;
  }
  currentimage(currenturl){
    this.currenturl=currenturl;
  }
  limitupdate(val){
    this.limit=val;
    this.setPage(1);
    this.display();
  }
  display(){
    this.imageser.picture(this.start, this.limit).subscribe((res:Image[]) =>{
      this.imagelist = res;
      this.setPage(1);
    });
  }
  ngOnInit() {
    this.display();
    this.currenturl='';
  }
  setPage(page: number) {
    if (page < 1 || page > this.pagination.totalPages) {
        return;
    }
    this.currenturl='';
    this.pagination = this.pagerService.getPager(this.imagelist.length, page, this.limit);
    this.pagedItems = this.imagelist.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
    }
  }
