import { TestBed } from '@angular/core/testing';

import { ListServService } from './list-serv.service';

describe('ListServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListServService = TestBed.get(ListServService);
    expect(service).toBeTruthy();
  });
});
