# Escoba

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## TODO

- [x] rough out new account UI component
- [ ] rough out new event UI component
- [ ] pass object to each
- [x] classes are called 'event', but component is all 'entry'. Change 'entry' to 'event'
- [x] Add reactive form for accounts to show at the bottom of the left column
- [ ] Add temporary reactive form for events to show at the bottom of the right column
- [x] Wire accounts form data into gun()
- [x] Wire accounts formGroupModel into the actual account model in a submit function
- [x] find a way to delete an account - this is going to have to hook into passing an object around.
- [x] figure out ID so you can manage these stupid objects
- [x] clicking on an account populates the account form
- [x] clicking an account doesnt refresh the form data. fix?
- [x] populating the form data from clicking and clicking Send makes a new account instead of modifying the existing. fix?
- [x] fix account form. 'send' is poor wording. 'create' and/or 'modify' would be better
- [ ] add bill tracking to this at some point.  See billtrack section below
- [ ] Switch to firebase? Would that provide any better usage?

## Box o' UX stuff

Click on an account, appComponent should get the key of the selected account and populate selectedAccount with the object from the accounts array.
account deselected should point selectedAccount to an empty Account object so that no data shows in the form until entered.
Add account / Modify account should push new or update existing
Editing a balance.  Do we put a box on the account?  Do we want to tie Account to event?  Need a bridge service for this?

## Bill Tracking

Be able to add a new monthly bill.
Be able to enter a value in that bill's source and generate an event.
Reporting?
God damn it now I want reporting on accounts as well and I havent really set this thing up for this.

## Reporting

We'll need a transactions node.
Payments generate a transaction
Balances need to be tracked over time.
So with balances over time, pin each change to the event that created it.