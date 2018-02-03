import { TestBed, inject } from '@angular/core/testing';

import { UserDetailGuardService } from './user-detail-guard.service';

describe('UserDetailGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailGuardService]
    });
  });

  it('should be created', inject([UserDetailGuardService], (service: UserDetailGuardService) => {
    expect(service).toBeTruthy();
  }));
});
