import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Image} from './image';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { 
    }
      picture(start, limit){
        const url = 'https://jsonplaceholder.typicode.com/photos/';
        return this.http.get<Image[]>(url);
    }
  }
