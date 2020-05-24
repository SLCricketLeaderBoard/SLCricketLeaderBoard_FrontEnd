import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerManagerRegisterComponent } from './manager-manager-register.component';

describe('ManagerManagerRegisterComponent', () => {
  let component: ManagerManagerRegisterComponent;
  let fixture: ComponentFixture<ManagerManagerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerManagerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerManagerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
