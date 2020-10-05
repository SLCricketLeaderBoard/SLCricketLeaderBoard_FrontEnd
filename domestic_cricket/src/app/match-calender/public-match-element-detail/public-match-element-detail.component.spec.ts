import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMatchElementDetailComponent } from './public-match-element-detail.component';

describe('PublicMatchElementDetailComponent', () => {
  let component: PublicMatchElementDetailComponent;
  let fixture: ComponentFixture<PublicMatchElementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicMatchElementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMatchElementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
