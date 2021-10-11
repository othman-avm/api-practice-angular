import { TestBed } from '@angular/core/testing';

import { AirthingsService } from './airthings.service';

describe('AirthingsService', () => {
  let service: AirthingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirthingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
