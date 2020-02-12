import { TestBed } from '@angular/core/testing';

import { CreateBrandPageService } from './create-brand-page.service';

describe('CreateBrandPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateBrandPageService = TestBed.get(CreateBrandPageService);
    expect(service).toBeTruthy();
  });
});
