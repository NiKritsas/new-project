import { Component, OnInit } from '@angular/core';
import { ImportServiceService } from '../import-service.service';
import { BugsImport } from './bugs-import';


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
      // console.log(result)
    });
  }




  datas: BugsImport[];

  constructor(private service: ImportServiceService) { }

  ngOnInit() {

    this.service.getFields().subscribe(result =>

      this.datas = result);


  }


}
