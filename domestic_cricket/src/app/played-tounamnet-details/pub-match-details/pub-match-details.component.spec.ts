import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubMatchDetailsComponent } from './pub-match-details.component';

describe('PubMatchDetailsComponent', () => {
  let component: PubMatchDetailsComponent;
  let fixture: ComponentFixture<PubMatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubMatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
