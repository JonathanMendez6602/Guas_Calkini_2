/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AseguradoraService } from './Aseguradora.service';

describe('Service: Aseguradora', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AseguradoraService]
    });
  });

  it('should ...', inject([AseguradoraService], (service: AseguradoraService) => {
    expect(service).toBeTruthy();
  }));
});
