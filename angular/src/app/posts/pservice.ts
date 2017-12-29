import { Injectable } from '@angular/core';  
import { Iposts } from './postsensitive';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class postservice {
    constructor(private http: HttpClient){
    }
    postFunction(){
        const url = 'https://jsonplaceholder.typicode.com/posts/';
        return this.http.get<Iposts[]>(url);
    }
}