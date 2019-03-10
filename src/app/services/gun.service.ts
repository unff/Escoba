import { Injectable, OnDestroy } from '@angular/core'
import Gun from 'gun/gun'
import { Account } from '../classes/account'
import { Event } from '../classes/event'
import { Transaction } from '../classes/transaction'

@Injectable({
  providedIn: 'root'
})
export class GunService implements OnDestroy {

  readonly gun = Gun()

  public accounts: Account[]
  public events: Event[]
  public transactions: Transaction[]

  private _accounts: any
  private _events: any
  private _transactions: any

  constructor() {

    // start listening to the accounts and events feeds from gunDB.
    this._accounts = this.gun.get('accounts')
    // when the accounts observable changes, just re-process the set (not great, but works)
    this._accounts.on((v, o) => {
      // console.info('accounts.on() fired')
      this.loadAccounts()
    })
    this._transactions = this.gun.get('transactions')
    this._transactions.on((v, o) => {
      this.loadTransactions()
    })
  }

  loadAccounts() {
    this.accounts = []
    this._accounts.map().once((data: any, key: any) => {
      // console.info('account.on() fired for ', key)
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
        console.log('account loaded: ', account, key)
      }
    })
  }

  loadTransactions() {
    this.transactions = []
    this._transactions.map().once((data: any, key: any) => {
      if (data !== null && this.transactions.find((t: any) => t.key === key) === undefined) {
        const transaction: Transaction = new Transaction(
          key,
          data.type,
          data.date,
          data.content,
          data.accountKey,
          data.adjustment,
          data.afterBalance
        )
        this.transactions.push(transaction)
        console.log('transaction loaded: ', transaction, key)
      }
    })
  }

  ngOnDestroy() {
    this._accounts.off()
    this._events.off()
  }

  addTransaction(t: Transaction) {
    console.log('db.addTransaction before')
    this._transactions.set(t)
  }

  updateTransaction(t: Transaction) {
    this._transactions.get(t.key).put(t)
  }

  deleteTransaction(t: Transaction) {
    this._transactions.get(t.key).put(null)
  }

  addAccount(acct: Account) {
    this._accounts.set(acct)
  }

  updateAccount(acct: Account) {
    this._accounts.get(acct.key).put(acct)
  }

  deleteAccount(acct: Account) {
    this._accounts.get(acct.key).put(null) // no idea if this is correct or will even work.
  }

  // end of class GunService
}
