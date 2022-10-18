import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInComponent } from './life-in.component';

describe('LifeInComponent', () => {
  let component: LifeInComponent;
  let fixture: ComponentFixture<LifeInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
