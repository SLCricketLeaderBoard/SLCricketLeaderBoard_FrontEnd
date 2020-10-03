import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDayPlayerRankingsComponent } from './one-day-player-rankings.component';

describe('OneDayPlayerRankingsComponent', () => {
  let component: OneDayPlayerRankingsComponent;
  let fixture: ComponentFixture<OneDayPlayerRankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDayPlayerRankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDayPlayerRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
