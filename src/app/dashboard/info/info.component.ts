import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
name : any;
  constructor(private _route : ActivatedRoute) { }

  ngOnInit() {
    this.name=this._route.snapshot.params["name"]
  }

}
