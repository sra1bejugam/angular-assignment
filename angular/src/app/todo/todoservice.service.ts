import { Injectable } from '@angular/core';  
import { Itodo } from './todosensitive';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class todoservice {
    constructor(private http: HttpClient){
    }
    todofunction(){
        const url = 'https://jsonplaceholder.typicode.com/posts/';
        return this.http.get<Itodo[]>(url);
    }
}