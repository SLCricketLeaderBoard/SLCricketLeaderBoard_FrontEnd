import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOversComponent } from './match-overs.component';

describe('MatchOversComponent', () => {
  let component: MatchOversComponent;
  let fixture: ComponentFixture<MatchOversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchOversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchOversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
