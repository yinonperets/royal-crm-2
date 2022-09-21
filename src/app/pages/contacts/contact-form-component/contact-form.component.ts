import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact-interface';


@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent  {
  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() contact: Contact = {
   firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      state: '',
      country: '',
      city: '',
      street: '',
      houseNumber: 0,
      zip: 0,
  },
birthday: new Date(),
  };
  onSubmit({ valid, value }: NgForm) {
    if (valid) this.submit.emit(value);
  };

  resetForm(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        state: '',
        country: '',
        city: '',
        street: '',
        houseNumber: 0,
        zip: 0,
    },
    birthday: new Date(),
  });
    this.reset.emit();
  }

}
