import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTournamentListComponent } from './manager-tournament-list.component';

describe('ManagerTournamentListComponent', () => {
  let component: ManagerTournamentListComponent;
  let fixture: ComponentFixture<ManagerTournamentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTournamentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTournamentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
