import { TestBed } from '@angular/core/testing';

import { CreateCategoryPageService } from './create-category-page.service';

describe('CreateCategoryPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCategoryPageService = TestBed.get(CreateCategoryPageService);
    expect(service).toBeTruthy();
  });
});
