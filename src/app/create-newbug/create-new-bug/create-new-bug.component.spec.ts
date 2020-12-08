import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBugComponent } from './create-new-bug.component';

describe('CreateNewBugComponent', () => {
  let component: CreateNewBugComponent;
  let fixture: ComponentFixture<CreateNewBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
