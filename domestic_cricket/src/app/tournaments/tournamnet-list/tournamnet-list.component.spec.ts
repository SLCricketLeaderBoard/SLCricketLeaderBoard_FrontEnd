import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamnetListComponent } from './tournamnet-list.component';

describe('TournamnetListComponent', () => {
  let component: TournamnetListComponent;
  let fixture: ComponentFixture<TournamnetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamnetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamnetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
