import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Account } from '../classes/account'

@Component({
  selector: 'esb-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: Account
  @Output() delete = new EventEmitter<Account>()

  constructor() { }

  deleteAccount() {
      console.log('account component delete hit')
      this.delete.emit(this.account)
  }

}
