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

  sortArray: boolean [];
  

  

  sortTable(columnName: any, order : boolean) {



    this.service.getSorted(columnName, order).subscribe(result => {
      this.datas = []
      this.datas = result
      console.log(result)
    });
  }



  datas: BugsImport[];

  constructor(private service: ImportServiceService) { }

  ngOnInit() {

    this.service.getFields().subscribe(result =>

      this.datas = result);
  }

}
