import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from '../contact-interface';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contacts-details',
  templateUrl: './contacts-details.component.html',

})
export class ContactsDetailsComponent implements OnInit {
  createdAt: any;
  birthday: any;
  contact: Contact | void = undefined;
  dataReceived: boolean = false;

  constructor(private AR: ActivatedRoute, private CS: ContactsService) {}

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.CS.getContact(id!, (contact: Contact) => {
        this.contact = contact;
        this.createdAt = new Date(contact.createdAt?.seconds * 1000)
        this.dataReceived = true;
      });
    });
  }
  }


