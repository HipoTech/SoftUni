import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDerailComponent } from './product-derail.component';

describe('ProductDerailComponent', () => {
  let component: ProductDerailComponent;
  let fixture: ComponentFixture<ProductDerailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDerailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDerailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
