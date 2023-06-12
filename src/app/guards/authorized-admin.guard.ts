import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { authenticatedGuard } from './authenticated.guard';
import { AuthorizationService } from '../services/authorization.service';

export const authorizedAdminGuard: CanActivateFn = (route, state) => {

  const srvAuth = inject(AuthenticationService);
  const authenticated = srvAuth.isLogged();
  const isAdmin = srvAuth.role === 'ADMINISTRATEUR'; 
  const router = inject(Router)

  if (!authenticated) { 
    router.navigate(['/connexion']);
  }
  if(!isAdmin){
    router.navigate([ '/denied' ]);
  }

  return true;
};


