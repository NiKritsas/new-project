import {
  Component,
  OnInit
} from '@angular/core';
import {
  ImportServiceService
} from '../import-service.service';
import {
  BugsImport
} from './bugs-import';
import {
  Router
} from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  SearchService
} from '../search.service';
var isSearching: boolean = false;
var pageIndex: number;
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
    pageIndex = 0;
    //console.log(pageIndex);
    colPressed = columnName;
    if (columnName == "title" && this.sortArray[0] == 0) {
      this.sortArray[0] = 1;
      this.order = "asc";
    } else if (columnName == "title" && this.sortArray[0] == 1) {
      this.sortArray[0] = 0;
      this.order = "desc";
    } else if (columnName == "priority" && this.sortArray[1] == 0) {
      this.sortArray[1] = 1;
      this.order = "asc";
    } else if (columnName == "priority" && this.sortArray[1] == 1) {
      this.sortArray[1] = 0;
      this.order = "desc";
    } else if (columnName == "reporter" && this.sortArray[2] == 0) {
      this.sortArray[2] = 1;
      this.order = "asc";
    } else if (columnName == "reporter" && this.sortArray[2] == 1) {
      this.sortArray[2] = 0;
      this.order = "desc";
    } else if (columnName == "createdAt" && this.sortArray[3] == 0) {
      this.sortArray[3] = 1;
      this.order = "asc";
    } else if (columnName == "createdAt" && this.sortArray[3] == 1) {
      this.sortArray[3] = 0;
      this.order = "desc";
    } else if (columnName == "status" && this.sortArray[4] == 0) {
      this.sortArray[4] = 1;
      this.order = "asc";
    } else if (columnName == "status" && this.sortArray[4] == 1) {
      this.sortArray[4] = 0;
      this.order = "desc";
    }
    1
    this.service.getSorted(columnName, this.order).subscribe(result => {
      this.datas = []
      this.datas = result

    });
  }

  displayPage() {
    this.service.getFields().subscribe(result => this.datas = result);
  }

  searchBugForm: FormGroup;
  datas: BugsImport[];

  constructor(private service: ImportServiceService, private router: Router, private fb: FormBuilder, private searchService: SearchService) {}

  ngOnInit() {
    this.displayPage()
    pageIndex = 0;
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



  deleteBug(dataId: string, title: string) {
    console.log(title);

    this.service.deleteBug(dataId, title).subscribe(
      () => {
        console.log('Bug with Id=' + dataId + 'deleted'),
          (err) => console.log(err),
          location.reload();
        //this.router.navigate(['/'])
      })

  }


  changePage(incdec: number) {
    pageIndex = pageIndex + incdec;
    
    if (pageIndex >= 0) {
      if (colPressed == " " && isSearching == false) {
        this.service.changePage(pageIndex).subscribe(result => {
          if (result === undefined || result.length == 0) {
            pageIndex--;
            console.log(pageIndex,isSearching);
          } else {
            console.log(result.length);
            this.datas = [];
            this.datas = result
          }
        });
      } else if(isSearching == false){
        this.service.getSortedPage(colPressed, this.order, pageIndex).subscribe(result => {
          if (result === undefined || result.length == 0) {
            pageIndex--;
            console.log(pageIndex);
          } else{
            console.log(result.length);
            console.log(pageIndex,isSearching);
            this.datas = [];
            this.datas = result
          }
        });
      }else if(isSearching == true){
        this.searchService.searchBugPage(pageIndex)
        .subscribe(result => {
          if (result === undefined || result.length == 0) {
            pageIndex--;
            console.log(pageIndex);
          } else {
            console.log(pageIndex,isSearching);
            console.log(result.length);
            this.datas = [];
          this.datas = result}});
        
        
      }
    } else {
      pageIndex +=1;
    }
    console.log(incdec);

    console.log(pageIndex);
  }
  
  searchBug() {
    var searchInfo = this.searchBugForm.value;
    console.log(searchInfo);
    if (searchInfo.title == "" && searchInfo.priority == "" &&
        searchInfo.reporter == "" && searchInfo.status == "") {
        isSearching = false;
        console.log(isSearching);
        
        alert("You must enter a search field!Redirectin to Starting Page.");
        this.displayPage()
    } else {
      this.searchService.searchBug(searchInfo.title,
          searchInfo.priority, searchInfo.reporter, searchInfo.status)
        .subscribe(result => this.datas = result);
        isSearching = true;
        console.log(isSearching);
    }
  }
}
