import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSignupComponent } from './club-signup.component';

describe('ClubSignupComponent', () => {
  let component: ClubSignupComponent;
  let fixture: ComponentFixture<ClubSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
