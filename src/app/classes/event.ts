import { IEvent } from '../interfaces/event'

export class Event implements IEvent {
    public key: string
    public type: string
    public note: string

    
    constructor(key: string, type: string, note: string) {
        this.key = key
        this.type = type
        this.note = note
    }
}
