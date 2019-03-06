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
  constructor(public db: GunService) {
    this.accountForm = this.createAccountFormGroup()
    // this.eventForm = this.createEventFormGroup()
  }

  createAccountFormGroup() {
      return new FormGroup({
          name: new FormControl(''),
          balance: new FormControl(''),
          icon: new FormControl(''),
          siteUrl: new FormControl(''),
          color: new FormControl(''),
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
    this.addAcccount(result)
  }

  addAcccount(a: Account) {
    this.db.addAccount(a)
  }
}
