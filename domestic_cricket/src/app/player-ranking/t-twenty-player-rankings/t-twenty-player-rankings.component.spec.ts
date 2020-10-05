import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TTwentyPlayerRankingsComponent } from './t-twenty-player-rankings.component';

describe('TTwentyPlayerRankingsComponent', () => {
  let component: TTwentyPlayerRankingsComponent;
  let fixture: ComponentFixture<TTwentyPlayerRankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TTwentyPlayerRankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TTwentyPlayerRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
