import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private _role: string = "";

  public get role(): string {
    return this._role;
  }

  public set role(value: string) {
    localStorage.setItem('role', value);

    this._role = value;
  }


  public isAuthorizedAdmin(){
    if(this.role != 'ADMIN'){
      return false;
    }
    return true;
  }

  public isAuthorizedCreateur(){
    if(this.role != 'CREATEUR'){
      return false;
    }
    return true;
  }

  public isAuthorizedModerateur(){
    if(this.role != 'MODERATEUR'){
      return false;
    }
    return true;
  }
}
