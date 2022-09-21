import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Contact } from '../contact-interface';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',

})
export class EditContactComponent implements OnInit {

   contact: Contact | void = undefined;
  id: string | null = null;
  createdAt: Date | void = undefined;
  dataReceived: boolean = false;

  constructor(
    private CS: ContactsService,
    private AR: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(contact: Contact) {
    contact.createdAt = this.createdAt!;
    this.CS.edit(contact, this.id!, () => this.router.navigate(['/contacts']));
  }

  resetForm() {
    this.CS.getContact(this.id!, (contact: Contact) => {
      this.contact = contact;
    });
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;

      this.CS.getContact(id!, (contact: Contact) => {
        this.contact = contact;
        this.createdAt = contact.createdAt;
        this.dataReceived = true;
      });
    });
  }

}
