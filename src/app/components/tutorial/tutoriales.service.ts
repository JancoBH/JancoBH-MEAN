import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class TutorialesService {

  private tutorialesUrl = '/api/tutoriales';

  constructor(
    private http: HttpService
  ) { }

  getTutoriales(): Observable<any> {
    return this.http.request({
      url: `/api/tutoriales`,
      method: 'get'
    });
  }

  getTutorial(id): Observable<any> {
    return this.http.request({
      url: `/api/tutoriales/${id}`,
      method: 'get'
    });
  }

}
