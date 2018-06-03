import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideStatsComponent } from './side-stats.component';

describe('SideStatsComponent', () => {
  let component: SideStatsComponent;
  let fixture: ComponentFixture<SideStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
