import { TestBed } from '@angular/core/testing';

import { LiveScorePredictionService } from './live-score-prediction.service';

describe('LiveScorePredictionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveScorePredictionService = TestBed.get(LiveScorePredictionService);
    expect(service).toBeTruthy();
  });
});
