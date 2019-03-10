import { Component } from '@angular/core'
import { GunService } from './services/gun.service'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { Account } from './classes/account'
import { Transaction } from './classes/transaction'

@Component({
  selector: 'esb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escoba'
  showEditModal = false
  showNoteModal = false
  accountForm: FormGroup
  noteForm: FormGroup
  accountHolder: Account
  transactionHolder: Transaction
  readonly emptyTransaction: Transaction = new Transaction('', '', '', '', '', 0, 0)
  readonly emptyAccount: Account = new Account('', '', 0, '', '', '')
  constructor(public db: GunService) {
    this.accountForm = this.createAccountFormGroup()
    this.noteForm = this.createNoteFormGroup()
    this.accountHolder = this.emptyAccount
    this.transactionHolder = this.emptyTransaction
    // this.eventForm = this.createEventFormGroup()
  }

  createAccountFormGroup() {
      return new FormGroup({
          key: new FormControl(),
          name: new FormControl(),
          balance: new FormControl(),
          icon: new FormControl(),
          siteUrl: new FormControl(),
          color: new FormControl(),
      })
  }

  createNoteFormGroup() {
    return new FormGroup({
      key: new FormControl(),
      type: new FormControl(),
      content: new FormControl()
    })
  }

  revert() {
    this.accountHolder = this.emptyAccount
    this.transactionHolder = this.emptyTransaction
    this.accountForm.reset()
    this.noteForm.reset()
  }

  onSubmit() {
    // move the formModel over to the data model
    const result: Account = Object.assign({}, this.accountForm.value)
    if (!result.key) {
      this.addAcccount(result)
    } else {
      console.log('result: ', result)
      this.updateAccount(result)
    }
    this.showEditModal = false
  }

  noteSubmit() {
    const result: Transaction = Object.assign({}, this.noteForm.value)
    if (!result.key) {
      result.type = 'Note'
      result.date = new Date(Date.now()).toISOString()
      result.content = result.content.replace(/(\r\n|\n\r|\r|\n)/g, ' <br> ')
      console.log('nSub', result)
      this.addTransaction(result)
    } else {
      this.updateTransaction(result)
    }
    this.showNoteModal = false
  }

  addNewAccount() {
    this.revert()
    this.showEditModal = true
  }

  addNewNote() {
    this.revert()
    this.showNoteModal = true
  }

  addAcccount(a: Account) {
    console.log('addAccount: ', a)
    this.db.addAccount(a)
  }

  deleteAccount(a: Account) {
    this.db.deleteAccount(a)
  }

  updateAccount(a: Account) {
    this.db.updateAccount(a)
  }

  addTransaction(t: Transaction) {
    console.log('app.addTransaction', t)
    this.db.addTransaction(t)
  }

  updateTransaction(t: Transaction) {
    this.db.updateTransaction(t)
  }

  selected(a: Account) {
    console.log('selected', a)
    console.log('accountForm: ', this.accountForm)
    this.accountHolder = a
    this.accountForm.reset()
    this.accountForm.setValue({
      key: this.accountHolder.key,
      name: this.accountHolder.name,
      balance: this.accountHolder.balance,
      icon: this.accountHolder.icon,
      siteUrl: this.accountHolder.siteUrl,
      color: this.accountHolder.color
    })
    this.showEditModal = true
    this.accountForm.markAsDirty()
  }
}
