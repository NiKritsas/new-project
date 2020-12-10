import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BugsImport } from '../user-story1/user-story1/bugs-import';


@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  

  constructor(private http: HttpClient) { }
  
  addBug(newBug: BugsImport): Observable<BugsImport> {
    return this.http.post<BugsImport>( 'https://bug-report-system-server.herokuapp.com/bugs', newBug)
    
  }

  editBug(bugId: string, newBug: BugsImport) {
   return this.http.put<BugsImport>('https://bug-report-system-server.herokuapp.com/bugs/' + bugId , newBug)
  }
}
//putBug(id: number, editedBug: any): Observable<any>{
  //return this.http.put<any>(
   // `${this.endpoint}/${id}`, editedBug); 