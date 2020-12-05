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

  // sortTable(colNum){

  // }



  datas: BugsImport[] = [{

    title: '',
    priority: '',
    reporter: '',
    status: '',
    createdAt: ''

  }]

  constructor(private service: ImportServiceService) { }

  ngOnInit() {

    this.service.getFields().subscribe((result: any[]) =>

      this.datas = result);
  }

}
