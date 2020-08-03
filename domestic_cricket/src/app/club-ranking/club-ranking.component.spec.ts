import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubRankingComponent } from './club-ranking.component';

describe('ClubRankingComponent', () => {
  let component: ClubRankingComponent;
  let fixture: ComponentFixture<ClubRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
