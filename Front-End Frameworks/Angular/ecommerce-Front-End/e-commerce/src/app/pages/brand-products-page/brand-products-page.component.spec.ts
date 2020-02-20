import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandProductPageComponent } from './brand-products-page.component';

describe('BrandProductPageComponent', () => {
  let component: BrandProductPageComponent;
  let fixture: ComponentFixture<BrandProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrandProductPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
