import { Component, OnInit } from '@angular/core';
import { todoservice } from './todoservice.service'
import { Itodo } from './todosensitive';
import { HttpClient } from '@angular/common/http';
import { PagingService } from '../paging.service'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  start : number;
  limit : number;
  todoList: Itodo[];
  pagination: any = {};
  pagedItems: any[];
  constructor(private _todoservice: todoservice,private pagerService: PagingService) {
    this.start = 0;
    this.limit = 10;
   }
   updateLimit(val){
    this.limit=val;
    this.setPage(1);
    this.display();
    }
display(){
  this._todoservice.todofunction().subscribe((res:Itodo[]) =>{
    this.todoList = res;
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
  this.pagination = this.pagerService.getPager(this.todoList.length, page, this.limit);
  this.pagedItems = this.todoList.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }
}