import { IAccount } from '../interfaces/account'

export class Account implements IAccount {
    // PROPERTIES
    private _key: string
    private _Name: string
    private _Balance: number
    private _Icon: string
    private _SiteUrl: string
    private _Color: string

    // PROPERTY GETTERS AND SETTERS
    public get key() {
        return this._key
    }
    public set key(a: string) {
        this._key = a
    }

    public get name() {
        return this._Name
    }
    public set name(a: string) {
        this._Name = a
    }

    public get balance() {
        return this._Balance
    }
    public set balance(a: number) {
        this._Balance = a
    }

    public get icon() {
        return this._Icon
    }
    public set icon(a: string) {
        this._Icon = a
    }

    public get siteUrl() {
        return this._SiteUrl
    }
    public set siteUrl(a: string) {
        this._SiteUrl = a
    }

    public get color() {
        return this._Color
    }
    public set color(a: string) {
        this._Color = a
    }

    constructor(key: string, name: string, balance: number, icon: string, siteUrl: string, color: string) {
        this._key = key
        this._Name = name
        this._Balance = balance
        this._Icon = icon
        this._SiteUrl = siteUrl
        this._Color = color
    }
}
