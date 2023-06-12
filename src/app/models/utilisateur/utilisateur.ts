export class Utilisateur {

    private _id!: number;
    private _pseudo!: string;
    private _email!: string;
    private _role!: string;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get pseudo(): string {
        return this._pseudo;
    }
    public set pseudo(value: string) {
        this._pseudo = value;
    }
    
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }

}
