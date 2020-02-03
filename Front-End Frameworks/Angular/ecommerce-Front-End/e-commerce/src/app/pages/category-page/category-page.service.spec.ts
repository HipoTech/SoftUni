import { TestBed } from '@angular/core/testing';

import { CategoryPageService } from './category-page.service';

describe('CategoryPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryPageService = TestBed.get(CategoryPageService);
    expect(service).toBeTruthy();
  });
});
