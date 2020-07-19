import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreePlayerListElementComponent } from './refree-player-list-element.component';

describe('RefreePlayerListElementComponent', () => {
  let component: RefreePlayerListElementComponent;
  let fixture: ComponentFixture<RefreePlayerListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreePlayerListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreePlayerListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
