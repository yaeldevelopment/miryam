import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Customer} from '../Models/Customer';
import api from '../Models/api';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
apiUrl:string="";
  constructor(private http:HttpClient) {
    this.apiUrl=api+"Function";

   }
  SendEmail(c:Customer):Observable<string>{

 return   this.http.post<string>(this.apiUrl+"/SendEmail",c,  { responseType: 'text' as 'json' });
  }

}
