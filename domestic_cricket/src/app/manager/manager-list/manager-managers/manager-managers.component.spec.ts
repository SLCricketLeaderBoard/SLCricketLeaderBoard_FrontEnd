import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerManagersComponent } from './manager-managers.component';

describe('ManagerManagersComponent', () => {
  let component: ManagerManagersComponent;
  let fixture: ComponentFixture<ManagerManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
