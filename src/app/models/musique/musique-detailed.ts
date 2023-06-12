export class MusiqueDetailed {
    public get nbPlays(): number {
        return this._nbPlays;
    }
    public set nbPlays(value: number) {
        this._nbPlays = value;
    }
    public get nbDownloads(): number {
        return this._nbDownloads;
    }
    public set nbDownloads(value: number) {
        this._nbDownloads = value;
    }
    public get linkDownload(): string {
        return this._linkDownload;
    }
    public set linkDownload(value: string) {
        this._linkDownload = value;
    }
    public get albumNom(): string {
        return this._albumNom;
    }
    public set albumNom(value: string) {
        this._albumNom = value;
    }
    public get albumId(): number {
        return this._albumId;
    }
    public set albumId(value: number) {
        this._albumId = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    public get linkAudio(): string {
        return this._linkAudio;
    }
    public set linkAudio(value: string) {
        this._linkAudio = value;
    }
    public get linkId(): number {
        return this._linkId;
    }
    public set linkId(value: number) {
        this._linkId = value;
    }
    public get duree(): number {
        return this._duree;
    }
    public set duree(value: number) {
        this._duree = value;
    }
    public get artiste(): string {
        return this._artiste;
    }
    public set artiste(value: string) {
        this._artiste = value;
    }
    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    constructor(
        private _id: number,
        private _titre: string,
        private _artiste: string,
        private _duree: number,
        private _nbPlays: number,
        private _nbDownloads: number,
        private _linkId: number,
        private _linkAudio: string,
        private _linkDownload: string,
        private _image: string,
        private _albumId: number,
        private _albumNom: string
    ) { }
}
