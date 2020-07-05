import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonregsponsorListComponent } from './nonregsponsor-list.component';

describe('NonregsponsorListComponent', () => {
  let component: NonregsponsorListComponent;
  let fixture: ComponentFixture<NonregsponsorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonregsponsorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonregsponsorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
