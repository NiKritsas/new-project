import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStory1Component } from './user-story1.component';

describe('UserStory1Component', () => {
  let component: UserStory1Component;
  let fixture: ComponentFixture<UserStory1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStory1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
