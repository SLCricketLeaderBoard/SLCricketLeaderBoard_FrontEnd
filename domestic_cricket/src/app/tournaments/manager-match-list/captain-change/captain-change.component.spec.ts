import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainChangeComponent } from './captain-change.component';

describe('CaptainChangeComponent', () => {
  let component: CaptainChangeComponent;
  let fixture: ComponentFixture<CaptainChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
