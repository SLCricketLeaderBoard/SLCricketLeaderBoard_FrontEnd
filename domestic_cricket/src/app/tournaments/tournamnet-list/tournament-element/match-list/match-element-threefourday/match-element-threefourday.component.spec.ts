import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchElementThreefourdayComponent } from './match-element-threefourday.component';

describe('MatchElementThreefourdayComponent', () => {
  let component: MatchElementThreefourdayComponent;
  let fixture: ComponentFixture<MatchElementThreefourdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchElementThreefourdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchElementThreefourdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
