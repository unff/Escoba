export class Transaction {
  private _key: string
  private _type: string
  private _date: Date
  private _note: string

    public get_key(): string {
        return this._key
    }

    public set_key(_key: string): void {
        this._key = _key
    }

    public get_type(): string {
        return this._type
    }

    public set_type(_type: string): void {
        this._type = _type
    }

    public get_date(): Date {
        return this._date
    }

    public set_date(_date: Date): void {
        this._date = _date
    }

    public get_note(): string {
        return this._note
    }

    public set_note(_note: string): void {
        this._note = _note
    }

    constructor(key: string, type: string, date: Date, note: string) {
        this._key = key
        this._type = type
        this._date = date
        this._note = note
    }

}
