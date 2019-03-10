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
  accountForm: FormGroup
  eventForm: FormGroup
  accountHolder: Account
  readonly emptyAccount: Account = new Account('', '', 0, '', '', '')
  constructor(public db: GunService) {
    this.accountForm = this.createAccountFormGroup()
    this.accountHolder = this.emptyAccount
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

  // createEventFormGroup() {
  //     return new FormGroup({
  //         type: new FormControl(),
  //         note: new FormControl()
  //     })
  // }

  revert() {
    this.accountHolder = this.emptyAccount
    this.accountForm.reset()
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

  addNewAccount() {
    this.revert()
    this.showEditModal = true
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

  processTransaction(t: Transaction) {
    console.log('app.processTransaction', t)
    this.db.addTransaction(t)
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
