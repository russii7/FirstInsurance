import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInComponent } from './car-in.component';

describe('CarInComponent', () => {
  let component: CarInComponent;
  let fixture: ComponentFixture<CarInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
