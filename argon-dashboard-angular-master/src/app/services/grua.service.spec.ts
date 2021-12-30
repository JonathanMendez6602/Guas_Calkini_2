/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GruaService } from './grua.service';

describe('Service: Grua', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GruaService]
    });
  });

  it('should ...', inject([GruaService], (service: GruaService) => {
    expect(service).toBeTruthy();
  }));
});
