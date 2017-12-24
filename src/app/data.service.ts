import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { 
    }
    ngOnInit(): void {
      this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data => {
        console.log(Image);
      });
    }
  }
