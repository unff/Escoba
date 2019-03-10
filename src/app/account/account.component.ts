import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core'
import { CurrencyPipe } from '@angular/common'
import { Account } from '../classes/account'
import { Transaction } from '../classes/transaction'

@Component({
  selector: 'esb-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: Account
  @Output() delete = new EventEmitter<Account>()
  @Output() selectedAccount = new EventEmitter<Account>()
  @Output() update = new EventEmitter<Account>()
  @Output() changeMade = new EventEmitter<Transaction>()

  @ViewChild('balEdit') balEdit: ElementRef
  @ViewChild('payment') payment: ElementRef
  editable: boolean
  previousBalance: number
  constructor() {this.editable = true}

  toggleEdit() {
    console.log(this.editable, ' -> ', !this.editable)
    this.editable = !this.editable
    this.previousBalance = !this.editable ? this.account.balance : this.previousBalance
  }

  setEditFocus() {
    console.log('setting focus')
    // need to get a before balance to use
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

  updateAccount() {
    this.update.emit(this.account)
  }

  generateTransaction(type: string, adjustment: number, content: string) {
    const t: Transaction = new Transaction(
      '',
      type,
      new Date(Date.now()).toISOString(),
      content,
      this.account.key,
      adjustment,
      this.account.balance
    )
    console.log('generateTransaction', t)
    this.changeMade.emit(t)
  }

  processAdjustment() {
    const adjustment: number = this.account.balance - this.previousBalance
    const fbal: string = new CurrencyPipe('en-US').transform(this.account.balance, 'USD', 'symbol', '1.2-2')
    const fadj: string = new CurrencyPipe('en-US').transform(adjustment, 'USD', 'symbol', '1.2-2')
    const content = `Adjustment of ${fadj} made to account ${this.account.name}.  New balance: ${fbal}`
    this.updateAccount()
    this.generateTransaction('Adjustment', adjustment, content)
  }

  processPayment() {
    const pmt: number = this.payment.nativeElement.value
    this.account.balance = this.account.balance - pmt
    const fpmt: string = new CurrencyPipe('en-US').transform(pmt, 'USD', 'symbol', '1.2-2')
    const fbal: string = new CurrencyPipe('en-US').transform(this.account.balance, 'USD', 'symbol', '1.2-2')
    const content = `Payment of ${fpmt} made to account ${this.account.name}.  New balance: ${fbal}`
    this.updateAccount()
    this.generateTransaction('Payment', pmt, content)
  }

  handleKeyPress(e: any) {
    // if you press Enter, remove focus
    if (e.keyCode === 13) {
      e.srcElement.blur()
    }
  }

}
