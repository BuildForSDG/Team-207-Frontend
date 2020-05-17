import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AlertService } from './../services/alert.services';
import { AccountService } from './../services/account.services';
import { HomeServiceItemComponent } from 'src/app/shared/home-service-item/home-service-item.component';
import { BottomCurveComponent } from 'src/app/shared/bottom-curve/bottom-curve.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  HomeServiceItemComponent, RegisterComponent, AlertService , AccountService, BottomCurveComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
