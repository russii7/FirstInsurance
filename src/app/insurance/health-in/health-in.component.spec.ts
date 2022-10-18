import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInComponent } from './health-in.component';

describe('HealthInComponent', () => {
  let component: HealthInComponent;
  let fixture: ComponentFixture<HealthInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
