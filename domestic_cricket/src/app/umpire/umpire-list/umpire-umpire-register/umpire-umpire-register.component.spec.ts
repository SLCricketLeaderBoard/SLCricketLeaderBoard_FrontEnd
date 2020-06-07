import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmpireUmpireRegisterComponent } from './umpire-umpire-register.component';

describe('UmpireUmpireRegisterComponent', () => {
  let component: UmpireUmpireRegisterComponent;
  let fixture: ComponentFixture<UmpireUmpireRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmpireUmpireRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmpireUmpireRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
