import { TestBed } from '@angular/core/testing';

import { MaquetaOleService } from './maqueta-ole.service';

describe('MaquetaOleService', () => {
  let service: MaquetaOleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquetaOleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
