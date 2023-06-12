export class AuthResponse {
  private _success: boolean = false;
  private _token: string = "";
  private _role: string = "";

  public get role(): string {
    return this._role;
  }

  public set role(value: string) {
    this._role = value;
  }

  public get success(): boolean {
    return this._success;
  }

  public set success(value: boolean) {
    this._success = value;
  }

  public get token(): string {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
  }
}
