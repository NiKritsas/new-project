import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-bug',
  templateUrl: './create-new-bug.component.html',
  styleUrls: ['./create-new-bug.component.scss']
})

export class CreateNewBugComponent implements OnInit {

  newBugForm: FormGroup


  constructor(private fb: FormBuilder) { }


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


}
