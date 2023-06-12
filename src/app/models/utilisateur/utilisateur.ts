export class Utilisateur {
    // CONFLIT A VIRER
    private _pseudo!: string;
    private _role!: string;
    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }
    public get pseudo(): string {
        return this._pseudo;
    }    
    public set pseudo(value: string) {
        this._pseudo = value;
    }
    // CONFLIT JUSQU'ICI
}
