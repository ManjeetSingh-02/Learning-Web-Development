Design a parking lot management system database design

- Slots

  - ID `pk`
  - Vehicle `vehicle_id`
  - User[customer] `user_id`
  - isReserved `Bool`
  - isAvailable `Bool`

- Users

  - ID `pk`
  - Name `string`
  - Contact No `string`
  - role `enum`[driver, gaurd]
  - Vehicle `vehicle_id`
  - Ticket `ticket_id`
  - reservedSlot `reserved_slot_id`
  - recordHistory `array` `record_id`

- Tickets

  - ID `pk`
  - Vehicle `vehicle_id`
  - User `user_id`
  - Slot `slot_id`
  - reservedTicket `Bool`
  - price `number`
  - createdAt `date`

- Vehicles

  - ID `vehicle_no - string`
  - Slot `slot_id`
  - User `user_id`
  - Ticket `ticket_id`
  - Type `enum`[2-wheeler, 4-wheeler]

- Reservation Parking Slots

  - ID `pk`
  - reservationDate `date`
  - Slot `slot_id`
  - User `user_id`
  - Ticket `ticket_id`
  - Vehicle `vehicle_id`

- Records
users.issueHistory < issueRecords.id
users.transactionHistory < transactions.id

issueRecords.book - books.id
issueRecords.user - users.id

reviews.book - books.id
reviews.user - users.id

transactions.book - books.id
transactions.user - users.id
  - ID `pk`
  - User `user_id`
  - Ticket `ticket_id`
  - Slot `slot_id`
  - slotType `enum`[normal, reserved]
  - Vehicle `vehicle_id`
  - entryTime `date`
  - exitTime `date`
  <!-- fee = Date.now() - time * ticket.price -->
