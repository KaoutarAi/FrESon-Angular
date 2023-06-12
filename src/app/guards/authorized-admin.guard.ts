import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { authenticatedGuard } from './authenticated.guard';
import { AuthorizationService } from '../services/authorization.service';

export const authorizedAdminGuard: CanActivateFn = (route, state) => {
  const srvAuthorization = inject(AuthorizationService);
  const authorized = srvAuthorization.isAuthorizedAdmin();
  const router = inject(Router);

  if(!authenticatedGuard){
    router.navigate([ '/connexion' ]);
  }
  if(!authorized){
    router.navigate([ '/denied' ]);
  }
  return true;
};
