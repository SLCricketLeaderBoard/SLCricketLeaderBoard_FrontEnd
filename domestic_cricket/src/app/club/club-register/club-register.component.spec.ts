import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubRegisterComponent } from './club-register.component';

describe('ClubRegisterComponent', () => {
  let component: ClubRegisterComponent;
  let fixture: ComponentFixture<ClubRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
