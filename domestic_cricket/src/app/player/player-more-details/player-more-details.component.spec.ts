import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMoreDetailsComponent } from './player-more-details.component';

describe('PlayerMoreDetailsComponent', () => {
  let component: PlayerMoreDetailsComponent;
  let fixture: ComponentFixture<PlayerMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
