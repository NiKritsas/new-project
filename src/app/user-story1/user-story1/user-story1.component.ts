import { Component, OnInit } from '@angular/core';
import { ImportServiceService } from '../import-service.service';
import { BugsImport } from './bugs-import';
import { Router } from '@angular/router'

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

    if (columnName == "title" && this.sortArray[0] == 0) { this.sortArray[0] = 1; this.order = "asc"; }
    else if (columnName == "title" && this.sortArray[0] == 1) { this.sortArray[0] = 0; this.order = "desc"; }
    else if (columnName == "priority" && this.sortArray[0] == 0) { this.sortArray[0] = 1; this.order = "asc"; }
    else if (columnName == "priority" && this.sortArray[0] == 1) { this.sortArray[0] = 0; this.order = "desc"; }
    else if (columnName == "reporter" && this.sortArray[0] == 0) { this.sortArray[0] = 1; this.order = "asc"; }
    else if (columnName == "reporter" && this.sortArray[0] == 1) { this.sortArray[0] = 0; this.order = "desc"; }
    else if (columnName == "createdAt" && this.sortArray[0] == 0) { this.sortArray[0] = 1; this.order = "asc"; }
    else if (columnName == "createdAt" && this.sortArray[0] == 1) { this.sortArray[0] = 0; this.order = "desc"; }
    else if (columnName == "status" && this.sortArray[0] == 0) { this.sortArray[0] = 1; this.order = "asc"; }
    else if (columnName == "status" && this.sortArray[0] == 1) { this.sortArray[0] = 0; this.order = "desc"; }

    this.service.getSorted(columnName, this.order).subscribe(result => {
      this.datas = []
      this.datas = result

    });
  }

  displayPage() {
    this.service.getFields().subscribe(result =>

      this.datas = result);
  }


  datas: BugsImport[];

  constructor(private service: ImportServiceService, private router: Router) { }

  ngOnInit() {

    this.displayPage()


  }

  editButtonClick(dataId: string) {
    this.router.navigate(['/editBug', dataId]);
  }



  deleteBug(dataId: string) {
    this.service.deleteBug(dataId).subscribe(
      () => {
        console.log('Bug with Id=' + dataId + 'deleted'),
          (err) => console.log(err),
          this.displayPage()
        this.router.navigate(['/'])


      })


  }
  getPagination(length: number) {
    return new Array(length / 2);
  }
  changePage(idx: number) {


    this.service.changePage(idx).subscribe(res => {
      this.datas = res
    }

    );
  }

}
