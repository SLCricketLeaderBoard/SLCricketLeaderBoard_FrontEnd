import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeFourDaysPlayerRankingsComponent } from './three-four-days-player-rankings.component';

describe('ThreeFourDaysPlayerRankingsComponent', () => {
  let component: ThreeFourDaysPlayerRankingsComponent;
  let fixture: ComponentFixture<ThreeFourDaysPlayerRankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeFourDaysPlayerRankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeFourDaysPlayerRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
