import { Injectable } from '@angular/core';
import {Contact} from './contact';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactService {
  private contactsUrl = '/api/contacts';

  constructor(private http: HttpClient) {}

  getTutoriales(): Promise<any[]> {
    return this.http.get('/api/tutoriales')
      .toPromise()
      .then(response => response as any[])
      .catch(this.handleError);
  }

  // get("/api/contacts")
  getContacts(): Promise<Contact[]> {
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(response => response as Contact[])
      .catch(this.handleError);
  }

  // post("/api/contacts")
  createContact(newContact: Contact): Promise<Contact> {
    return this.http.post(this.contactsUrl, newContact)
      .toPromise()
      .then(response => response as Contact)
      .catch(this.handleError);
  }

  // get("/api/contacts/:id") endpoint not used by Angular app

  // delete("/api/contacts/:id")
  deleteContact(delContactId: string): Promise<string> {
    return this.http.delete(this.contactsUrl + '/' + delContactId)
      .toPromise()
      .then(response => response as string)
      .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateContact(putContact: Contact): Promise<Contact> {
    const putUrl = this.contactsUrl + '/' + putContact._id;
    return this.http.put(putUrl, putContact)
      .toPromise()
      .then(response => response as Contact)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Promise.reject(errMsg);
  }
}
