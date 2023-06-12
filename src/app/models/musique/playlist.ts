import { Musique } from "./musique";
import { Tag } from "./tag";

export class Playlist {
    public get public(): boolean {
        return this._public;
    }
    public set public(value: boolean) {
        this._public = value;
    }
    public get utilisateurPseudo(): string | null {
        return this._utilisateurPseudo;
    }
    public set utilisateurPseudo(value: string | null) {
        this._utilisateurPseudo = value;
    }
    public get utilisateurId(): number {
        return this._utilisateurId;
    }
    public set utilisateurId(value: number) {
        this._utilisateurId = value;
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
        private _id: number = 0,
        private _nom: string = "",
        private _etiquette: Tag = Tag.JOIE,
        private _utilisateurId: number = 0,
        private _utilisateurPseudo: string | null = null,
        private _musiques: Musique[] = [],
        private _public: boolean = true
    ) {
        this.id = _id;
        this.nom = _nom;
        this._etiquette = _etiquette;
        this.utilisateurId = _utilisateurId
    }
}
