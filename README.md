# Escoba

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## TODO

- [x] rough out new account UI component
- [x] rough out new event UI component (table seems to work fine)
- [x] classes are called 'event', but component is all 'entry'. Change 'entry' to 'event'
- [x] Add reactive form for accounts to show at the bottom of the left column
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
- [x] throw away a nghts worth of code because the Account wouldnt pass correctly
- [x] change click-to-edit behavior to a link in the footer.
- [x] either hide the edit form or make it a modal until acct link clicked.
- [x] remove getters/setters from event class (thanks gun!)
- [x] add payment creates a transaction
- [x] add payment subtracts from balance
- [x] feed Fox
- [x] play with Fox
- [ ] editing balance creates a transaction
- [ ] gunDB can't store date objects. More fuel for firebase?
- [ ] add custom Transaction (note) modal for creating notes

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

## Notes

Thought I was passing Account objects into Gun.  Hoever, it turns out I was passing values (somehow?  not sure how?)  Gun ate itself on getters and setters when I tried to update.  Not sure if that was me, or if it was Gun, but removing the getters and setters cleared everything up, so yeah.  That's a thing that happens.