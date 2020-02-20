import { TestBed } from '@angular/core/testing';

import { CategoryProductPageService } from './category-products-page.service';

describe('DetailPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryProductPageService = TestBed.get(CategoryProductPageService);
    expect(service).toBeTruthy();
  });
});
