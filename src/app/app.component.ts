import { Component } from '@angular/core'
import { GunService } from './services/gun.service'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { Account } from './classes/account'

@Component({
  selector: 'esb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escoba'
  type = ['']
  accountForm: FormGroup
  eventForm: FormGroup
  accountHolder: Account
  constructor(public db: GunService) {
    this.accountForm = this.createAccountFormGroup()
    this.accountHolder = new Account('', '', 0, '', '', '')
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
    this.accountForm.reset()
  }

  onSubmit() {
    // move the formModel over to the data model
    const result: Account = Object.assign({}, this.accountForm.value)
    if (!result.key) {
      this.addAcccount(result)
    } else {
      this.updateAccount(result)
    }
  }

  addAcccount(a: Account) {
    this.db.addAccount(a)
  }

  deleteAccount(a: Account) {
    this.db.deleteAccount(a)
  }

  updateAccount(a: Account) {
    this.db.updateAccount(a)
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
    this.accountForm.markAsDirty()
  }
}
