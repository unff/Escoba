import { IAccount } from '../interfaces/account'

export class Account implements IAccount {
    // PROPERTIES
    public key: string
    public name: string
    public balance: number
    public icon: string
    public siteUrl: string
    public color: string

    constructor(key: string, name: string, balance: number, icon: string, siteUrl: string, color: string) {
        this.key = key
        this.name = name
        this.balance = balance
        this.icon = icon
        this.siteUrl = siteUrl
        this.color = color
    }
}
