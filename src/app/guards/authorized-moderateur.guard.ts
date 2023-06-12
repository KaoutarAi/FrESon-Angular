import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authorizedModerateurGuard: CanActivateFn = (route, state) => {
  const srvAuth = inject(AuthenticationService);
  const authenticated = srvAuth.isLogged();
  const isModerateur = srvAuth.role === 'MODERATEUR'; 
  const router = inject(Router)

  if (!authenticated) { 
    router.navigate(['/connexion']);
  }
  if(!isModerateur){
    router.navigate([ '/denied' ]);
  }

  return true;
};
