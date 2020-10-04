import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTournamentElementComponent } from './public-tournament-element.component';

describe('PublicTournamentElementComponent', () => {
  let component: PublicTournamentElementComponent;
  let fixture: ComponentFixture<PublicTournamentElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicTournamentElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTournamentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
