import { Component, OnInit, Input } from '@angular/core'
import { Account } from '../classes/account'

@Component({
  selector: 'esb-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: Account

  constructor() { }

  ngOnInit() {
  }

}
