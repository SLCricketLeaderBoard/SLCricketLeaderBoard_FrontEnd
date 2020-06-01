import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmpireUmpiresComponent } from './umpire-umpires.component';

describe('UmpireUmpiresComponent', () => {
  let component: UmpireUmpiresComponent;
  let fixture: ComponentFixture<UmpireUmpiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmpireUmpiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmpireUmpiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
