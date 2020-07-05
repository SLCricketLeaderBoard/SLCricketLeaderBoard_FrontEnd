import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailsMatchComponent } from './more-details-match.component';

describe('MoreDetailsMatchComponent', () => {
  let component: MoreDetailsMatchComponent;
  let fixture: ComponentFixture<MoreDetailsMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDetailsMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDetailsMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
