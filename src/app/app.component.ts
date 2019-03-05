import { Component } from '@angular/core'
import { GunService } from './services/gun.service'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
}
