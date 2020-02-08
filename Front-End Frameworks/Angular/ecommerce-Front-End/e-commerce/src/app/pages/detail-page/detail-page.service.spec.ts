import { TestBed } from '@angular/core/testing';

import { DetailPageService } from './detail-page.service';

describe('DetailPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailPageService = TestBed.get(DetailPageService);
    expect(service).toBeTruthy();
  });
});
