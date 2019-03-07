# Escoba

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

# TODO

- [x] rough out new account UI component
- [ ] rough out new event UI component
- [ ] pass object to each
- [x] classes are called 'event', but component is all 'entry'. Change 'entry' to 'event'
- [x] Add reactive form for accounts to show at the bottom of the left column
- [ ] Add temporary reactive form for events to show at the bottom of the right column
- [x] Wire accounts form data into gun()
- [x] Wire accounts formGroupModel into the actual account model in a submit function
- [ ] find a way to delete an account - this is going to have to hook into passing an object around.
- [ ] figure out ID so you can manage these stupid objects

# Box o' UX stuff

Click on an account, appComponent should get the key of the selected account and populate selectedAccount with the object from the accounts array.
account deselected should point selectedAccount to an empty Account object so that no data shows in the form until entered.
Add account / Modify account should push new or update existing
Editing a balance.  Do we put a box on the account?  Do we want to tie Account to event?  Need a bridge service for this?