import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeMatchListComponent } from './referee-match-list.component';

describe('RefereeMatchListComponent', () => {
  let component: RefereeMatchListComponent;
  let fixture: ComponentFixture<RefereeMatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeMatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeMatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
