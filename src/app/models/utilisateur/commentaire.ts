import { Utilisateur } from "./utilisateur";


export class Commentaire {
    public get utilisateur(): Utilisateur  {
        return this._utilisateur;
    }
    public set utilisateur(value: Utilisateur) {
        this._utilisateur = value;
    }
    public get date(): Date | null {
        return this._date;
    }
    public set date(value: Date | null) {
        this._date = value;
    }
    public get contenu(): string {
        return this._contenu;
    }
    public set contenu(value: string) {
        this._contenu = value;
    }
    public get id(): number | null {
        return this._id;
    }
    public set id(value: number | null) {
        this._id = value;
    }
   

    constructor(private _contenu: string, private _id: number | null = null,  private _date: Date | null = null, private _utilisateur: Utilisateur) { 
        this.contenu = _contenu;
    }
}
