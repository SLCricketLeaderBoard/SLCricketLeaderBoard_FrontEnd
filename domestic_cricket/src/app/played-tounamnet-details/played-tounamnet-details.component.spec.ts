import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedTounamnetDetailsComponent } from './played-tounamnet-details.component';

describe('PlayedTounamnetDetailsComponent', () => {
  let component: PlayedTounamnetDetailsComponent;
  let fixture: ComponentFixture<PlayedTounamnetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayedTounamnetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayedTounamnetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
