import { TestBed } from '@angular/core/testing';

import { CorralonService } from './corralon.service';

describe('CorralonService', () => {
  let service: CorralonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorralonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
