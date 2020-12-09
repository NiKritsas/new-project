import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewBugComponent } from './create-new-bug/create-new-bug.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CreateNewBugComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[CreateNewBugComponent]
})
export class CreateNewbugModule { }
