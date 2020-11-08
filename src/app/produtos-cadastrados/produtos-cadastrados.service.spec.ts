import { TestBed } from '@angular/core/testing';

import { ProdutosCadastradosService } from './produtos-cadastrados.service';

describe('ProdutosCadastradosService', () => {
  let service: ProdutosCadastradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosCadastradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
