import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authorizedCreateurGuard: CanActivateFn = (route, state) => {
  const srvAuth = inject(AuthenticationService);
  const authenticated = srvAuth.isLogged();
  const isCreateur = srvAuth.role === 'CREATEUR'; 
  const router = inject(Router)

  if (!authenticated) { 
    router.navigate(['/connexion']);
  }
  if(!isCreateur){
    router.navigate([ '/denied' ]);
  }

  return true;
};
