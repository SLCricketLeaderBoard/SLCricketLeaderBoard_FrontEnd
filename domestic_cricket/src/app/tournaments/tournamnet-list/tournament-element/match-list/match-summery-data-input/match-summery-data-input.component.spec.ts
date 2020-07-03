import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSummeryDataInputComponent } from './match-summery-data-input.component';

describe('MatchSummeryDataInputComponent', () => {
  let component: MatchSummeryDataInputComponent;
  let fixture: ComponentFixture<MatchSummeryDataInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchSummeryDataInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSummeryDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
