import { TestBed } from '@angular/core/testing';

import { SortStory1Service } from './sort-story1.service';

describe('SortStory1Service', () => {
  let service: SortStory1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortStory1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
