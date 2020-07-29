import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorSignupComponent } from './sponsor-signup.component';

describe('SponsorSignupComponent', () => {
  let component: SponsorSignupComponent;
  let fixture: ComponentFixture<SponsorSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
