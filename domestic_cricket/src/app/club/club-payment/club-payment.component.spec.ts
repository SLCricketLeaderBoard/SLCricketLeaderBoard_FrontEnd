import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubPaymentComponent } from './club-payment.component';

describe('ClubPaymentComponent', () => {
  let component: ClubPaymentComponent;
  let fixture: ComponentFixture<ClubPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
