import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact-interface';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'new-contact',
  templateUrl: './new-contact.component.html',
})
export class NewContactComponent  {

  constructor(private CS: ContactsService, private router: Router) {}

  onSubmit(event: any) {
    if (event.firstName != undefined) {
      let contact: Contact = {
        firstName: event.firstName,
        lastName: event.lastName,
        email: event.email,
        phone: event.phone,
        address: {
          state: event.address.state,
          country: event.address.country,
          city: event.address.city,
          street: event.address.street,
          houseNumber: event.address.houseNumber,
          zip: event.address.zip,
        },
        birthday: event.birthday,
      };
      this.CS.add(contact, () => this.router.navigate(['/contacts']));
    }
  }
}
