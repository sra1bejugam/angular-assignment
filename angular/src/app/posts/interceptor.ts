import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Image } from '../image';
import { HttpClient } from '@angular/common/http/src/client';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
//import {ToasterService} from "angular2-toaster";


export class interceptor implements HttpInterceptor{
    intercept(req: HttpRequest<Image>, next: HttpHandler){
        const newRequest = req.clone({
            headers: req.headers.set(
                'Authorization',
                'admin'
            )
        });
        console.log(newRequest);
        console.log(newRequest.body);
        return next.handle(newRequest).do(
            event => {
                if(event instanceof HttpResponse){
                    if(event.status === 200){
                        console.log("successfull");
                    }
                    else{
                        console.log("not successfull");
                    }}});}}