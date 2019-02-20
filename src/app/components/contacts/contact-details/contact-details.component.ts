import {Component, Input} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  @Input()
  contact: Contact;

  @Input()
  createHandler: any;
  @Input()
  updateHandler: any;
  @Input()
  deleteHandler: any;

  constructor(private contactService: ContactService) {}

  createContact(contact: Contact) {
    this.contactService.createContact(contact).then((newContact: Contact) => {
      this.createHandler(newContact);
    });
  }

  updateContact(contact: Contact): void {
    this.contactService.updateContact(contact).then((updatedContact: Contact) => {
      this.updateHandler(updatedContact);
    });
  }

  deleteContact(contactId: any): void {
    this.contactService.deleteContact(contactId).then((deletedContactId: any) => {
      this.deleteHandler(deletedContactId);
    });
  }
}
