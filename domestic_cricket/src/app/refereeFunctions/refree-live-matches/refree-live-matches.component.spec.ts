import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreeLiveMatchesComponent } from './refree-live-matches.component';

describe('RefreeLiveMatchesComponent', () => {
  let component: RefreeLiveMatchesComponent;
  let fixture: ComponentFixture<RefreeLiveMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreeLiveMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreeLiveMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
