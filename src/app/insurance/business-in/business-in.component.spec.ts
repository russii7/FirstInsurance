import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInComponent } from './business-in.component';

describe('BusinessInComponent', () => {
  let component: BusinessInComponent;
  let fixture: ComponentFixture<BusinessInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
