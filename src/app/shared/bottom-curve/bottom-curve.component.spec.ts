import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCurveComponent } from './bottom-curve.component';

describe('BottomCurveComponent', () => {
  let component: BottomCurveComponent;
  let fixture: ComponentFixture<BottomCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
