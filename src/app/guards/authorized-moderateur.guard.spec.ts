import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authorizedModerateurGuard } from './authorized-moderateur.guard';

describe('authorizedModerateurGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authorizedModerateurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
