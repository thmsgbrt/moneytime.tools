import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveEarningsComponent } from './live-earnings.component';

describe('LiveEarningsComponent', () => {
  let component: LiveEarningsComponent;
  let fixture: ComponentFixture<LiveEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
