import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubPaymentNotCompleteListComponent } from './club-payment-not-complete-list.component';

describe('ClubPaymentNotCompleteListComponent', () => {
  let component: ClubPaymentNotCompleteListComponent;
  let fixture: ComponentFixture<ClubPaymentNotCompleteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubPaymentNotCompleteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubPaymentNotCompleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
