import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreeTournamentsComponent } from './refree-tournaments.component';

describe('RefreeTournamentsComponent', () => {
  let component: RefreeTournamentsComponent;
  let fixture: ComponentFixture<RefreeTournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreeTournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreeTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
