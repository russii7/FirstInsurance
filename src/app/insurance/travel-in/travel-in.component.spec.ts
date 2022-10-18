import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInComponent } from './travel-in.component';

describe('TravelInComponent', () => {
  let component: TravelInComponent;
  let fixture: ComponentFixture<TravelInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
