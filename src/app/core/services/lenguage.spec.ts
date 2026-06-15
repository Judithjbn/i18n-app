import { TestBed } from '@angular/core/testing';

import { Lenguage } from './lenguage';

describe('Lenguage', () => {
  let service: Lenguage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lenguage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
