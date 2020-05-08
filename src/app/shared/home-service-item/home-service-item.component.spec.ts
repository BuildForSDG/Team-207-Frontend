import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiceItemComponent } from './home-service-item.component';

describe('HomeServiceItemComponent', () => {
  let component: HomeServiceItemComponent;
  let fixture: ComponentFixture<HomeServiceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
