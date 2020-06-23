import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentElementComponent } from './tournament-element.component';

describe('TournamentElementComponent', () => {
  let component: TournamentElementComponent;
  let fixture: ComponentFixture<TournamentElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
