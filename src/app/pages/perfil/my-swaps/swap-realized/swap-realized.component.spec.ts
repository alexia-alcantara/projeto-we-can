import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapRealizedComponent } from './swap-realized.component';

describe('SwapRealizedComponent', () => {
  let component: SwapRealizedComponent;
  let fixture: ComponentFixture<SwapRealizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapRealizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapRealizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
