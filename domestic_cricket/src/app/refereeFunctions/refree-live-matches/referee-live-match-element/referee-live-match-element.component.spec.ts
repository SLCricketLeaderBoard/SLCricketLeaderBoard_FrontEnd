import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeLiveMatchElementComponent } from './referee-live-match-element.component';

describe('RefereeLiveMatchElementComponent', () => {
  let component: RefereeLiveMatchElementComponent;
  let fixture: ComponentFixture<RefereeLiveMatchElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeLiveMatchElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeLiveMatchElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
