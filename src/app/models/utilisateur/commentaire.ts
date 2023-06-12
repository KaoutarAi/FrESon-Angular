export class Commentaire {

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get contenu(): string {
        return this._contenu;
    }
    public set contenu(value: string) {
        this._contenu = value;
    }

    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }

    constructor(private _id: number, private _contenu: string, private _date: Date){}
}
