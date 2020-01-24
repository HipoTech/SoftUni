import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsSideBarComponent } from './brands-side-bar.component';

describe('BrandsSideBarComponent', () => {
  let component: BrandsSideBarComponent;
  let fixture: ComponentFixture<BrandsSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
