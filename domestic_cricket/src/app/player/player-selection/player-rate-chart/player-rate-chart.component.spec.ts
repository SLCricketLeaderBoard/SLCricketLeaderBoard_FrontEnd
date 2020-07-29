import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRateChartComponent } from './player-rate-chart.component';

describe('PlayerRateChartComponent', () => {
  let component: PlayerRateChartComponent;
  let fixture: ComponentFixture<PlayerRateChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRateChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
