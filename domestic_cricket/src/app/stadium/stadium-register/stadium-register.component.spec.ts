import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumRegisterComponent } from './stadium-register.component';

describe('StadiumRegisterComponent', () => {
  let component: StadiumRegisterComponent;
  let fixture: ComponentFixture<StadiumRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
