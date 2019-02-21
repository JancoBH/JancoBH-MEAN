import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorialesService {

  private contactsUrl = '/api/tutoriales';

  static handleError(error: any): Promise<any> {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Promise.reject(errMsg);
  }

  constructor(
    private http: HttpClient
  ) { }

  // get("/api/contacts")
  getContacts(): Promise<any[]> {
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(response => response as any[])
      .catch(TutorialesService.handleError);
  }

}
