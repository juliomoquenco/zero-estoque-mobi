import { TestBed } from '@angular/core/testing';

import { FormOfertaService } from './form-oferta.service';

describe('FormOfertaService', () => {
  let service: FormOfertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOfertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
