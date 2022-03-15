import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfImmobileComponent } from './detail-of-immobile.component';

describe('DetailOfImmobileComponent', () => {
  let component: DetailOfImmobileComponent;
  let fixture: ComponentFixture<DetailOfImmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOfImmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOfImmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
