import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonregsponsorsComponent } from './nonregsponsors.component';

describe('NonregsponsorsComponent', () => {
  let component: NonregsponsorsComponent;
  let fixture: ComponentFixture<NonregsponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonregsponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonregsponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
