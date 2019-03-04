import { Injectable } from '@angular/core'
import Gun from 'gun/gun'

@Injectable({
  providedIn: 'root'
})
export class GunService {

  readonly gun = Gun(location.origin + '/gun')

  public accounts: Account[]
  public events: Event[]

  // got some data holders, how to populate?
  // bring in Gun, do a get, then an on.
  // in the on(), populate these variables.

  constructor() {
    // start listening to the accounts and events feeds from gunDB.
    this.gun.get('accounts').on((data: any, key: any) => {
      this.accounts = data
      console.log('accounts: ', data, key)
    })
    this.gun.get('events').on((data: any, key: any) => {
      this.events = data
      console.log('events: ', data, key)
    })
  }

  addEvent(evt: Event) {
    this.gun.get('events').set(evt)
  }

  addAccount(acct: Account) {
    this.gun.get('accounts').set(acct)
  }


}
