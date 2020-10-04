import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMatchElementComponent } from './public-match-element.component';

describe('PublicMatchElementComponent', () => {
  let component: PublicMatchElementComponent;
  let fixture: ComponentFixture<PublicMatchElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicMatchElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMatchElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
