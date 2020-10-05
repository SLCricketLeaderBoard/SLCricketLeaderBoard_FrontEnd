import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCalenderComponent } from './match-calender.component';

describe('MatchCalenderComponent', () => {
  let component: MatchCalenderComponent;
  let fixture: ComponentFixture<MatchCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
