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

    return this.http.get<BugsImport[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=' + field + ',' + order);
  }

  // getCreate(): Observable<BugsImport[]>{
  //   return this.http.get<BugsImport[]>()
  // }

}
//https://bug-report-system-server.herokuapp.com/bugs?sort=title,desc