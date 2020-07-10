import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeTeamPlayersComponent } from './referee-team-players.component';

describe('RefereeTeamPlayersComponent', () => {
  let component: RefereeTeamPlayersComponent;
  let fixture: ComponentFixture<RefereeTeamPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeTeamPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeTeamPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
