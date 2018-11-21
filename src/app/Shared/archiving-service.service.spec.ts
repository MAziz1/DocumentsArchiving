import { TestBed, inject } from '@angular/core/testing';

import { ArchivingServiceService } from './archiving-service.service';

describe('ArchivingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchivingServiceService]
    });
  });

  it('should be created', inject([ArchivingServiceService], (service: ArchivingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
