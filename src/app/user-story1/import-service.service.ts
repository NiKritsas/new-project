import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BugsImport } from './user-story1/bugs-import';


@Injectable({
  providedIn: 'root'
})
export class ImportServiceService {
  
  constructor(private http: HttpClient) { }

  getFields(): Observable<BugsImport[]> {
     
    
    
    return this.http.get<BugsImport[]>('https://bug-report-system-server.herokuapp.com/bugs');
  }
  getSorted(field: string, order : string ): Observable<BugsImport[]> {
    console.log(field,order);
    
    return this.http.get<BugsImport[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=' + field + ',' + order );
  }                                   
  getSortedPage(field: string, order : string, inx:number ): Observable<BugsImport[]> {
    console.log(field,order,inx);
    
    return this.http.get<BugsImport[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=' + field + ',' + order + '&page=' + inx );
  } 

  getBugsId(id: string): Observable<BugsImport> {
    return this.http.get<BugsImport>('https://bug-report-system-server.herokuapp.com/bugs/' + id);
  }

  deleteBug(dataId: string,title: string): Observable<void> {
    console.log(dataId,title);
    
    return this.http.delete<void>('https://bug-report-system-server.herokuapp.com/bugs/' + dataId);
  }
  changePage(idx : number):Observable<BugsImport[]>{
    //console.log(idx);
    return this.http.get<BugsImport[]>('https://bug-report-system-server.herokuapp.com/bugs?page=' + idx) 
  }
  
  
}
