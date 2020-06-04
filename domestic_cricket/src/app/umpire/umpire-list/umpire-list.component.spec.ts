import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmpireListComponent } from './umpire-list.component';

describe('UmpireListComponent', () => {
  let component: UmpireListComponent;
  let fixture: ComponentFixture<UmpireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmpireListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmpireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
