import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuiHomeComponent } from './luihome.component';
import { AlertService } from './../services/alert.services';
import { AccountService } from './../services/account.services';
import { HomeServiceItemComponent } from 'src/app/shared/home-service-item/home-service-item.component';
import { BottomCurveComponent } from 'src/app/shared/bottom-curve/bottom-curve.component';

describe('LuiHomeComponent', () => {
  let component: LuiHomeComponent;
  let fixture: ComponentFixture<LuiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  HomeServiceItemComponent, LuiHomeComponent, AlertService , AccountService, BottomCurveComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
