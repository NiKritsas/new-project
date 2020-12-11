import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { BugsImport } from 'src/app/user-story1/user-story1/bugs-import';
import {ActivatedRoute} from '@angular/router';
import { ImportServiceService } from 'src/app/user-story1/import-service.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-create-new-bug',
  templateUrl: './create-new-bug.component.html',
  styleUrls: ['./create-new-bug.component.scss'],
  providers: [PostService, ImportServiceService]
})

export class CreateNewBugComponent implements OnInit {

  newBugForm: FormGroup;
 
  service: PostService;
  
  bugId: string;

  
  constructor(private fb: FormBuilder,
             private postBug: PostService,
             private route: ActivatedRoute,
             private bugsService: ImportServiceService,
             private router:Router) { }


  ngOnInit() {
    this.newBugForm = this.fb.group({
      title:['', Validators.required],
      description:['', Validators.required],
      priority: ['', Validators.required],
      reporter:['', Validators.required],
      status:['']
    
    
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
    this.route.paramMap.subscribe(params =>{
      this.bugId = params.get('id')
      console.log(this.bugId)
      if(this.bugId){
        this.getBug(this.bugId);
      }
    })

       
  }
  
  
  getBug(id : string){
    this.bugsService.getBugsId(id).subscribe(
      (data: BugsImport) => this.editBug(data),
      (err:any)=> console.log(err)
      );
  }
  editBug(data: BugsImport){
    this.newBugForm.patchValue({
      title: data.title,
      description: data.description,
      priority : data.priority,
      reporter : data.reporter,
      status : data.status
    });
  }

  onSumbit() {
   
    let newBug: BugsImport = this.newBugForm.value;

    if(this.bugId){
      this.postBug.editBug(this.bugId, newBug).subscribe((result) => console.log(result))
      
    }else{
      
      this.postBug.addBug(newBug).subscribe((result) => console.log(result))
      console.log('perase')
    }
    

    this.router.navigate(['/'])
    
  }








}
