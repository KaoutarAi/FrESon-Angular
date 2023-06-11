import { Musique } from "./musique";
import { Tag } from "./tag";

export class Playlist {
    public get utilisateurId(): number {
        return this._utilisateurId;
    }
    public set utilisateurId(value: number) {
        this._utilisateurId = value;
    }
    public get utilisateurPseudo(): string {
        return this._utilisateurPseudo;
    }
    public set utilisateurPseudo(value: string) {
        this._utilisateurPseudo = value;
    }
    public get musiques(): Musique[] {
        return this._musiques;
    }
    public set musiques(value: Musique[]) {
        this._musiques = value;
    }
    public get etiquette(): Tag {
        return this._etiquette;
    }
    public set etiquette(value: Tag) {
        this._etiquette = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    constructor(
        private _id: number,
        private _nom: string,
        private _etiquette: Tag,
        private _utilisateurId: number,
        private _utilisateurPseudo: string,
        private _musiques: Musique[]
    ) { }
}
