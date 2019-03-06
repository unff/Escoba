import { Injectable, OnDestroy } from '@angular/core'
import Gun from 'gun/gun'
import { Account } from '../classes/account'
import { Event } from '../classes/event'

@Injectable({
  providedIn: 'root'
})
export class GunService implements OnDestroy {

  readonly gun = Gun()

  public accounts: Account[]
  public events: Event[]

  private _accounts: any
  private _events: any

  constructor() {
    this.accounts = []
    this.events = []
    // start listening to the accounts and events feeds from gunDB.
    this._accounts = this.gun.get('accounts')
    this._accounts.map().on((data: any, key: any) => {
      // see if key exists in accounts[] array
      if (this.accounts.find((e: any) => e.key === key) === undefined) {
        // no account found, create a new one and add it to the array
        const account: Account = new Account(
          data.key,
          data.name,
          data.balance,
          data.icon,
          data.siteUrl,
          data.color
        )
        this.accounts.push(account)
        console.log('account added: ', data.name, key)
      }
    })
    this._events = this.gun.get('events')
    this._events.map().on((data: any, key: any) => {
      if (this.events.find((e: any) => e.key === key) === undefined) {
        const event: Event = new Event(
          data.key,
          data.type,
          data.note
        )
        this.events.push(event)
        console.log('event added: ', data, key)
      }
    })
  }

  ngOnDestroy() {
      this._accounts.off()
      this._events.off()
  }

  addEvent(evt: Event) {
    this.gun.get('events').set(evt)
  }

  addAccount(acct: Account) {
    this.gun.get('accounts').set(acct)
  }

// end of class GunService
}
