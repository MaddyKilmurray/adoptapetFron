import { TestBed } from '@angular/core/testing';

import { AnimalAdoptionAPIServiceService } from './animal-adoption-apiservice.service';

describe('AnimalAdoptionAPIServiceService', () => {
  let service: AnimalAdoptionAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalAdoptionAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
