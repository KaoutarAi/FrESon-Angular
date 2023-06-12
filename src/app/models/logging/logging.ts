import { Utilisateur } from "../utilisateur/utilisateur";

export class Logging {
    public get utilisateur(): Utilisateur {
        return this._utilisateur;
    }
    public set utilisateur(value: Utilisateur) {
        this._utilisateur = value;
    }

    public get date(): Date {
        return this._date;
    }

    public set date(value: Date) {
        this._date = value;
    }

    public get text(): string {
        return this._text;
    }

    public set text(value: string) {
        this._text = value;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    constructor(private _id: number, private _text: string, private _date: Date, private _utilisateur: Utilisateur){}
}
