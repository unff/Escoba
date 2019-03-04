import { IEvent } from '../interfaces/event'

export class Event implements IEvent {
    private _type: string
    private _note: string

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

    constructor(type: string, note: string) {
        this._type = type
        this._note = note
    }
}
