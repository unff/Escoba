import { Injectable, OnDestroy } from '@angular/core'
import Gun from 'gun/gun'
import { Account } from '../classes/account'
import { Event } from '../classes/event'

@Injectable({
  providedIn: 'root'
})
export class GunService implements OnDestroy {

  readonly gun = Gun('http://localhost:8765/gun')

  public accounts: Account[]
  public events: Event[]

  private _accounts: any
  private _events: any

  constructor() {

    // start listening to the accounts and events feeds from gunDB.
    this._accounts = this.gun.get('accounts')
    this._accounts.on((v,o) => {
      console.info('accounts.on() fired')
      this.loadAccounts()
    })
    // this.loadAccounts()

    this._events = this.gun.get('events')
    this.loadEvents()
  }

  loadAccounts() {
    this.accounts = []
    this._accounts.map().on((data: any, key: any) => {
      console.info('account.on() fired for ', key)
      // see if key exists in accounts[] array, ignore null (deleted) nodes
      if (data !== null && this.accounts.find((e: any) => e.key === key) === undefined) {
        // no account found, create a new one and add it to the array
        const account: Account = new Account(
          key,
          data.name,
          data.balance,
          data.icon,
          data.siteUrl,
          data.color
        )
        this.accounts.push(account)
        console.log('account added: ', account, key)
      }
    })
  }

  loadEvents() {
    // event loader goes here
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

  deleteEvent(evt: Event) {

  }

  deleteAccount(acct: Account) {
    this._accounts.get(acct.key).put(null) // no idea if this is correct or will even work.
    // remove this account from the accounts array as well, as on() wont pick up the changes
    this.accounts = this.accounts.filter(value => value.key !== acct.key)
  }

  // end of class GunService
}
