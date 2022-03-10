import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCompletedComponent } from './reservation-completed.component';

describe('ReservationCompletedComponent', () => {
  let component: ReservationCompletedComponent;
  let fixture: ComponentFixture<ReservationCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
