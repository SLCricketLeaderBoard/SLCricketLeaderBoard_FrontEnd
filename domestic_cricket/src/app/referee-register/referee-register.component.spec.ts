import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeRegisterComponent } from './referee-register.component';

describe('RefereeRegisterComponent', () => {
  let component: RefereeRegisterComponent;
  let fixture: ComponentFixture<RefereeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
