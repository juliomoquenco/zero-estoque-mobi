import { TestBed } from '@angular/core/testing';

import { ProdutosFavoritosService } from './produtos-favoritos.service';

describe('ProdutosFavoritosService', () => {
  let service: ProdutosFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
