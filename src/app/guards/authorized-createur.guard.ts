import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
import { authenticatedGuard } from './authenticated.guard';

export const authorizedCreateurGuard: CanActivateFn = (route, state) => {
  const srvAuthorization = inject(AuthorizationService);
  const authorized = srvAuthorization.isAuthorizedCreateur();
  const router = inject(Router)

  if(!authenticatedGuard){
    router.navigate([ '/connexion' ]);
  }
  if(!authorized){
    router.navigate([ '/denied' ]);
  }
  return true;
};
