import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private http: HttpClient) { }
  searchBug(Title: string, Priority: string, Reporter: string, Status: string):Observable<any>{
    
    return this.http.get(`https://bug-report-system-server.herokuapp.com/bugs?title=${Title}&priority=${Priority}&reporter=${Reporter}&status=${Status}`);
    }
  
}
