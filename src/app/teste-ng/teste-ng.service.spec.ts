import { TestBed } from '@angular/core/testing';

import { TesteNgService } from './teste-ng.service';

describe('TesteNgService', () => {
  let service: TesteNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesteNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
