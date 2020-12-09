import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { BugsImport } from 'src/app/user-story1/user-story1/bugs-import';

@Component({
  selector: 'app-create-new-bug',
  templateUrl: './create-new-bug.component.html',
  styleUrls: ['./create-new-bug.component.scss'],
  providers: [PostService]
})

export class CreateNewBugComponent implements OnInit {

  newBugForm: FormGroup;
 
  service: PostService;
  router: any;




  constructor(private fb: FormBuilder, private postBug: PostService) { }


  ngOnInit() {
    this.newBugForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      priority: ["", Validators.required],
      reporter: ["", Validators.required],
      status: [""]
    })


    this.newBugForm.get('reporter').valueChanges.subscribe((value) => {

      const statusControl = this.newBugForm.get('status')

      if (value == 'QA') {
        statusControl.setValidators(Validators.required)

      } else {
        statusControl.clearValidators()
      }
      statusControl.updateValueAndValidity()
    })
  }


  onSumbit() {
   // console.log(this.newBugForm.value)
    let newBug: BugsImport = this.newBugForm.value;

    this.postBug.addBug(newBug).subscribe((result) => console.log(result))
  }









}
