import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliationsReceivedComponent } from './avaliations-received.component';

describe('AvaliationsReceivedComponent', () => {
  let component: AvaliationsReceivedComponent;
  let fixture: ComponentFixture<AvaliationsReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliationsReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliationsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
