import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductPageComponent } from './category-products-page.component';

describe('DetailPageComponent', () => {
  let component: CategoryProductPageComponent;
  let fixture: ComponentFixture<CategoryProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryProductPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
