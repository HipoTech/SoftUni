import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBrandPageComponent } from './create-brand-page.component';

describe('CreateBrandPageComponent', () => {
  let component: CreateBrandPageComponent;
  let fixture: ComponentFixture<CreateBrandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBrandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
