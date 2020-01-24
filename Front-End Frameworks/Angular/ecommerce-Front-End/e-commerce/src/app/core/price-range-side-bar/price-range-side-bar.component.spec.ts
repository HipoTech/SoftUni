import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRangeSideBarComponent } from './price-range-side-bar.component';

describe('PriceRangeSideBarComponent', () => {
  let component: PriceRangeSideBarComponent;
  let fixture: ComponentFixture<PriceRangeSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceRangeSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRangeSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
