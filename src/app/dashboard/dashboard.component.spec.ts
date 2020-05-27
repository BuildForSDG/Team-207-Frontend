import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { AlertService } from '../services/alert.services';
import { AccountService } from '../services/account.services';
import { HomeServiceItemComponent } from 'src/app/shared/home-service-item/home-service-item.component';
import { BottomCurveComponent } from 'src/app/shared/bottom-curve/bottom-curve.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  HomeServiceItemComponent, DashboardComponent, AlertService , AccountService, BottomCurveComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
