/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CorralonService } from './corralon.service';

describe('Service: Corralon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorralonService]
    });
  });

  it('should ...', inject([CorralonService], (service: CorralonService) => {
    expect(service).toBeTruthy();
  }));
});
