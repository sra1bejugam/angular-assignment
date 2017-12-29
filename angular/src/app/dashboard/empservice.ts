import { Injectable } from '@angular/core';  
import { Istudents } from './casesen';

@Injectable()
export class appService {  
    //constructor (private dataService:DataService) 
   
    getstudents(): Istudents [] {
        return[
            
                  {    "id":"1",
                      "name":"sra1",
                      "dept":"ecm",
                      "jd":"12-12-2007",
                      "percent":"75"
              },
                 { 
                  "id":"2",
                  "name": "nihal",
                  "dept": "ECM",
                  "jd":"10-12-2007",
                  "percent":"75"
              },
                  {
                      "id":"3",
                      "name": "sandeep",
                      "dept": "ECE",
                      "jd":"9-12-2007",
                      "percent":"75"
           
               },
                  {
                      "id":"4",
                   "name": "vinay",
                   "dept": "ECE",
                   "jd":"8-12-2007",
                   "percent":"75"
           
                },
                {
                  "id":"5",
                   "name": "chaitanya",
                   "dept": "ECE",
                   "jd":"7-12-2007",
                   "percent":"65"
                },
                {
                    "id":"6",
                   "name": "soujanya",
                   "dept": "CSE",
                   "jd":"6-12-2007",
                   "percent":"45"
                },
                {
                  "id":"7",
                   "name": "pavitra",
                   "dept": "CSE",
                   "jd":"5-12-2007",
                   "percent":"85"
                },
                {
                  "id":"8",
                   "name": "nikhil",
                   "dept": "CSE",
                   "jd":"9-12-2007",
                   "percent":"65"
                },
                {
                  "id":"9",
                   "name": "anurag",
                   "dept": "CSE",
                   "jd":"11-12-2007",
                   "percent":"95"
                },
               {
                  "id":"10",
                   "name": "Ashish",
                   "dept": "CSE",
                   "jd":"5-12-2007",
                   "percent":"75"
               },
               {
                   "id":"11",
                   "name": "sai",
                   "dept": "IT",
                   "jd":"4-12-2007",
                   "percent":"75"
           
               },
               {
                  "id":"12",
                   "name": "anvesh",
                   "dept": "CSE",
                   "jd":"3-12-2007",
                   "percent":"75"
               },
               {
                  "id":"13",
                   "name": "ganesh",
                   "dept": "CSE",
                   "jd":"1-12-2007",
                   "percent":"75"
               },
               {
                  "id":"14",
                   "name": "venkatesh",
                   "dept": "CSE",
                   "jd":"4-12-2007",
                   "percent":"75"
            }
           ]
        }
    }
