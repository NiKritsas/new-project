import { Component, OnInit } from '@angular/core';
import { ImportServiceService } from '../import-service.service';
import { BugsImport } from './bugs-import';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../search.service';


var colPressed: string = " ";
@Component({
  selector: 'app-user-story1',
  templateUrl: './user-story1.component.html',
  styleUrls: ['./user-story1.component.scss'],
  providers: [ImportServiceService]
})



export class UserStory1Component implements OnInit {


  sortArray: number[] = [0, 0, 0, 0, 0];
  order: string;
  
  sortTable(columnName: string) {
    colPressed = columnName;
    if (columnName == "title" && this.sortArray[0] == 0) { this.sortArray[0] = 1; this.order = "asc"; }
    else if (columnName == "title" && this.sortArray[0] == 1) { this.sortArray[0] = 0; this.order = "desc"; }
    else if (columnName == "priority" && this.sortArray[1] == 0) { this.sortArray[1] = 1; this.order = "asc"; }
    else if (columnName == "priority" && this.sortArray[1] == 1) { this.sortArray[1] = 0; this.order = "desc"; }
    else if (columnName == "reporter" && this.sortArray[2] == 0) { this.sortArray[2] = 1; this.order = "asc"; }
    else if (columnName == "reporter" && this.sortArray[2] == 1) { this.sortArray[2] = 0; this.order = "desc"; }
    else if (columnName == "createdAt" && this.sortArray[3] == 0) { this.sortArray[3] = 1; this.order = "asc"; }
    else if (columnName == "createdAt" && this.sortArray[3] == 1) { this.sortArray[3] = 0; this.order = "desc"; }
    else if (columnName == "status" && this.sortArray[4] == 0) { this.sortArray[4] = 1; this.order = "asc"; }
    else if (columnName == "status" && this.sortArray[4] == 1) { this.sortArray[4] = 0; this.order = "desc"; }1
      this.service.getSorted(columnName, this.order).subscribe(result => {
      this.datas = []
      this.datas = result

    });
  }

  displayPage() {
    this.service.getFields().subscribe(result => this.datas = result);
  }

  searchBugForm : FormGroup;
  datas: BugsImport[];

  constructor(private service: ImportServiceService, private router: Router
    ,private fb: FormBuilder, private searchService: SearchService) { }

  ngOnInit() {
    this.displayPage()

    this.searchBugForm = this.fb.group({
      title: [''],
      priority: [''],
      reporter: [''],
      status: ['']
    })
  }

  editButtonClick(dataId: string) {
    this.router.navigate(['/editBug', dataId]);
  }



  deleteBug(dataId: string,title: string) {
    console.log(title);
    
    this.service.deleteBug(dataId,title).subscribe(
      () => {
        console.log('Bug with Id=' + dataId +'deleted'),
          (err) => console.log(err),
          location.reload();
        //this.router.navigate(['/'])
      })

  }
  getPagination(length: number) {
    console.log(length);
    
    return new Array(length );
  }

  changePage(idx: number,) {
   
    
    if(colPressed==" "){
    this.service.changePage(idx).subscribe(res => {
      this.datas = []
      this.datas = res
    });
    }else{
    this.service.getSortedPage(colPressed, this.order, idx).subscribe(result => {
      this.datas = []
      this.datas = result
    });}
  }

  searchBug(){
    let searchInfo = this.searchBugForm.value;
    console.log(searchInfo);
    if(searchInfo.title==""&&searchInfo.priority==""&& searchInfo.reporter==""&& searchInfo.status==""){
        alert("You must enter a search field! Thank You.");
      }else{
    this.searchService.searchBug(searchInfo.title,
      searchInfo.priority, searchInfo.reporter, searchInfo.status).subscribe(result => this.datas = result);
    }
  }
}


