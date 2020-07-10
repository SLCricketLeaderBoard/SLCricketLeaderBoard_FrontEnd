import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreePlayerRecordDataInputComponent } from './refree-player-record-data-input.component';

describe('RefreePlayerRecordDataInputComponent', () => {
  let component: RefreePlayerRecordDataInputComponent;
  let fixture: ComponentFixture<RefreePlayerRecordDataInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreePlayerRecordDataInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreePlayerRecordDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
