import { TestBed } from '@angular/core/testing';

import { ChefOrchestreService } from './chef-orchestre.service';

describe('ChefOrchestreService', () => {
  let service: ChefOrchestreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefOrchestreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
