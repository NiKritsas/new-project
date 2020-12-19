import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { UserStory1Module } from './user-story1/user-story1.module';
import { CreateNewBugComponent } from './create-newbug/create-new-bug/create-new-bug.component';
import { UserStory1Component } from './user-story1/user-story1/user-story1.component';
import { CreateNewbugModule } from './create-newbug/create-newbug.module';
import { HttpClientModule } from '@angular/common/http';
import { CanDeactivateGuardService } from './create-newbug/can-deactivate-guard.service';

const routes: Routes = [
  {path: '', component: UserStory1Component},
  {path: 'createNewBug', component: CreateNewBugComponent,
  canDeactivate: [CanDeactivateGuardService]},
  {path: 'editBug/:id', component: CreateNewBugComponent,
  canDeactivate: [CanDeactivateGuardService]}
]


@NgModule({
  declarations: [
    AppComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    UserStory1Module,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CreateNewbugModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
