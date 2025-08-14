Design a library management system database design for normal library

- User

  - ID `pk`
  - Name `string`
  - email `string` `unique`
  - address `string`
  - contact no `string` `unique`
  - role: `enum`[USER, ADMIN]
  - issueHistory: `array`[book_ID]
  - transactionHistory `array`[transaction_ID]
  - createdAt: `Date`
  - updatedAt: `Date`

- Books

  - ID `pk`
  - Price `numeric`
  - Name `string`
  - Quantity `number`
  - Edition `number`
  - ISBN No `string`
  - publisher: `string`
  - publishedDate: `Date`
  - issueAvailable: `Boolean`
  - averageBookRating `number`
  - author: `string`
  - createdAt: `Date`
  - updatedAt: `Date`

- Issue Records

  - ID `pk`
  - Book `book_ID`
  - User `user_ID`
  - isReturned `Boolean`
  - isDamaged: `Boolean`
  - issueDate `Date`
  - returnDate `Date`
  - fine `number`

- Reviews

  - ID `pk`
  - book `book_ID`
  - user `user_ID`
  - content `string`
  - reviewRating `number`
  - createdAt `date`

- Transactions

  - ID `pk`
  - user `user_ID`
  - book `book_ID`
  - date `date`
  - type enum[book_issue, deposit_fine]
