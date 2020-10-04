import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfileSummeryComponent } from './player-profile-summery.component';

describe('PlayerProfileSummeryComponent', () => {
  let component: PlayerProfileSummeryComponent;
  let fixture: ComponentFixture<PlayerProfileSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerProfileSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfileSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
