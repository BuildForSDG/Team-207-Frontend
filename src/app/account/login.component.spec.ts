import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AlertService } from './../services/alert.services';
import { AccountService } from './../services/account.services';
import { HomeServiceItemComponent } from 'src/app/shared/home-service-item/home-service-item.component';
import { BottomCurveComponent } from 'src/app/shared/bottom-curve/bottom-curve.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  HomeServiceItemComponent, LoginComponent, AlertService , AccountService, BottomCurveComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
