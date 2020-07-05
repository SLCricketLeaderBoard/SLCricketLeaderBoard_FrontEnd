import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMatchListComponent } from './manager-match-list.component';

describe('ManagerMatchListComponent', () => {
  let component: ManagerMatchListComponent;
  let fixture: ComponentFixture<ManagerMatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerMatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
