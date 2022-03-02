import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsImmobileComponent } from './details-immobile.component';

describe('DetailsImmobileComponent', () => {
  let component: DetailsImmobileComponent;
  let fixture: ComponentFixture<DetailsImmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsImmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsImmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
