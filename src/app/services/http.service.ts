import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  request(requestSettings: any): Observable<any> {

    // http://localhost:4000
    const server = '';

    if (!requestSettings.method || requestSettings.method.toLowerCase() === 'get') {
      return this.http.get(
        server + requestSettings.url + (requestSettings.params ? '?' + requestSettings.params : ''),
        {responseType: requestSettings.type ? requestSettings.type : '', observe: requestSettings.observe ? 'response' : null})
        .pipe(
          catchError((error): any => {
            const errMsg = (error.message) ? error.message :
              error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console
            return throwError(`Connection Error: ${errMsg}`); // return another `error`
          })
        );
    } else if (requestSettings.method.toLowerCase() === 'post') {
      return this.http.post(server + requestSettings.url, requestSettings.params, {responseType: requestSettings.type ? requestSettings.type : ''});
    } else if (requestSettings.method.toLowerCase() === 'put') {
      return this.http.put(server + requestSettings.url, requestSettings.params, {responseType: 'text'});
    } else if (requestSettings.method.toLowerCase() === 'delete') {
      return this.http.delete(server + requestSettings.url,  {responseType: 'text'});
    }
  }

}
