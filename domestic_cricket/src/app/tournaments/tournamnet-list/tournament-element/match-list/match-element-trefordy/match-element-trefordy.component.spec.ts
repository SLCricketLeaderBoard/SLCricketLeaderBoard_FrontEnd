import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchElementTrefordyComponent } from './match-element-trefordy.component';

describe('MatchElementTrefordyComponent', () => {
  let component: MatchElementTrefordyComponent;
  let fixture: ComponentFixture<MatchElementTrefordyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchElementTrefordyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchElementTrefordyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
