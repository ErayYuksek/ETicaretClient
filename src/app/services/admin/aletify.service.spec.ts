import { TestBed } from '@angular/core/testing';

import { AletifyService } from './alertify.service';

describe('AletifyService', () => {
  let service: AletifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AletifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
