import { Component, Input } from '@angular/core';
import { Address } from 'src/app/interfaces/address';

@Component({
  selector: 'input-contact',
  templateUrl: './contact.component.html',
  styles: [],
})
export class ContactComponent {
  @Input() _id?: string = '';
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
  @Input() address?: Address;
  @Input() createdAt: Date | undefined;
  @Input() notes: string = '';
}
