import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core'
import { Account } from '../classes/account'

@Component({
  selector: 'esb-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: Account
  @Output() delete = new EventEmitter<Account>()
  @Output() selectedAccount = new EventEmitter<Account>()
  @ViewChild('balEdit') balEdit: ElementRef
  editable: boolean
  constructor() {this.editable = true}

  toggleEdit() {
    // console.log(this.editable, ' -> ', !this.editable)
    this.editable = !this.editable
  }

  setEditFocus() {
    console.log('setting focus')
    setTimeout(() => {
      this.balEdit.nativeElement.focus()
    }, 0)
  }

  deleteAccount() {
      console.log('account component delete hit')
      this.delete.emit(this.account)
  }

  accountClicked() {
    console.info('account was clicked')
    this.selectedAccount.emit(this.account)
  }

}
