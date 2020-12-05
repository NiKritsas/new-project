import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserStory1Module } from './user-story1/user-story1.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    UserStory1Module
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
