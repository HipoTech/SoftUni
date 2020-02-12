import { TestBed } from '@angular/core/testing';

import { CreateProductPageService } from './create-product-page.service';

describe('CreateProductPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateProductPageService = TestBed.get(CreateProductPageService);
    expect(service).toBeTruthy();
  });
});
