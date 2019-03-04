import { IEvent } from '../interfaces/event'

export class Event implements IEvent {
    private _key: string
    private _type: string
    private _note: string

    public get key() {
        return this._key
    }
    public set key(a: string) {
        this._key = a
    }

    public get type() {
        return this._type
    }
    public set type(a: string) {
        this._type = a
    }

    public get note() {
        return this._note
    }
    public set note(a: string) {
        this._note = a
    }

    constructor(key: string, type: string, note: string) {
        this._key = key
        this._type = type
        this._note = note
    }
}
