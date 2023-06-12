import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authorizedAdminGuard } from './authorized-admin.guard';

describe('authorizedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authorizedAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
