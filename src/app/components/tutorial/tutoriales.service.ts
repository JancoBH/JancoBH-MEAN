import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorialesService {

  private tutorialesUrl = '/api/tutoriales';

  constructor(
    private http: HttpClient
  ) { }

  static handleError(error: any): Promise<any> {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Promise.reject(errMsg);
  }

  // get("/api/tutoriales")
  getTutoriales(): Promise<any[]> {
    return this.http.get(this.tutorialesUrl)
      .toPromise()
      .then(response => response as any[])
      .catch(TutorialesService.handleError);
  }

  // get("/api/tutoriales/id")
  getTutorial(id): Promise<any[]> {
    return this.http.get(`${this.tutorialesUrl}/${id}`)
      .toPromise()
      .then(response => response as any[])
      .catch(TutorialesService.handleError);
  }

}
