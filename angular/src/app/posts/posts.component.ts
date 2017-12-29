import { Component, OnInit } from '@angular/core';
import { postservice } from './pservice'
import { Iposts } from './postsensitive';
import { HttpClient } from '@angular/common/http';
import { PagingService } from '../paging.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  start : number;
  limit : number;
  postList: Iposts[];
  pagination: any = {};
  pagedItems: any[];
  constructor(private _postService: postservice, private pagerService: PagingService) {
    this.start = 0;
    this.limit = 10;
   }
   updateLimit(val){
    this.limit=val;
    this.setPage(1);
    this.display();
  }
display(){
  this._postService.postFunction().subscribe((res:Iposts[]) =>{
    this.postList = res;
    this.setPage(1);
});
}
  ngOnInit() {
  this.display();
  }
  setPage(page: number) {
    if (page < 1 || page > this.pagination.totalPages) {
        return;
    }
    this.pagination = this.pagerService.getPager(this.postList.length, page, this.limit);
    this.pagedItems = this.postList.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
    }
}

