import { TestBed } from '@angular/core/testing';

import { CurrentServerService } from './current-server.service';

describe('CurrentServerService', () => {
  let service: CurrentServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
