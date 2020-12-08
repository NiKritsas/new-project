import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewBugComponent } from './create-new-bug/create-new-bug.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateNewBugComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[CreateNewBugComponent]
})
export class CreateNewbugModule { }
