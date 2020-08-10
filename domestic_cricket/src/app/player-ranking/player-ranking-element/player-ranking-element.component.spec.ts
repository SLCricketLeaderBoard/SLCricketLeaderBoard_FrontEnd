import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRankingElementComponent } from './player-ranking-element.component';

describe('PlayerRankingElementComponent', () => {
  let component: PlayerRankingElementComponent;
  let fixture: ComponentFixture<PlayerRankingElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRankingElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRankingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
