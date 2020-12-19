import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

  var titlePage: string="";
  var priorityPage: number=null;
  var reporterPage: string="";
  var statusPage: string="";
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private http: HttpClient) { }
  searchBug(Title: string, Priority: number, Reporter: string, Status: string):Observable<any>{
    titlePage =Title;
    priorityPage = Priority;
    reporterPage = Reporter;
    statusPage = Status;
    return this.http.get(`https://bug-report-system-server.herokuapp.com/bugs?title=${Title}&priority=${Priority}&reporter=${Reporter}&status=${Status}`);
    }

  searchBugPage(pagenum: number):Observable<any>{
    console.log(titlePage,priorityPage,reporterPage,statusPage);
    
    return this.http.get(`https://bug-report-system-server.herokuapp.com/bugs?page=${pagenum}&title=${titlePage}&priority=${priorityPage}&reporter=${reporterPage}&status=${statusPage}`);
  }
}
