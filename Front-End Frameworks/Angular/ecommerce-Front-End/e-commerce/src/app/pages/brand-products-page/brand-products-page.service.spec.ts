import { TestBed } from '@angular/core/testing';

import { BrandProductPageService } from './brand-products-page.service';

describe('BrandProductPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrandProductPageService = TestBed.get(BrandProductPageService);
    expect(service).toBeTruthy();
  });
});
