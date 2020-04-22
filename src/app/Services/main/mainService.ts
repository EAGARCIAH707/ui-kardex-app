import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class MainService {

  constructor(protected httpClient: HttpClient) {

  }

  public get(endpoint: string, options = {}): Observable<any> {
    console.log(options);
    return this.httpClient.get(endpoint, options).pipe(map(this.extractData),
      catchError(this.handleError));
  }

  public post(endpoint: string, payload = {}, options = {}): Observable<any> {
    return this.httpClient.post(endpoint, payload, options).pipe(map(this.extractData),
      catchError(this.handleError));
  }

  public patch(endpoint: string, payload = {}): Observable<any> {
    return this.httpClient.patch(endpoint, payload).pipe(map(this.extractData),
      catchError(this.handleError));
  }


  protected handleError(error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return throwError(error);
  }

  protected extractData(res: HttpResponse<any>) {
    try {
      const token = res.headers.get('token');
      console.log('Headers');
      if (token) {
        localStorage.setItem('token', token);
      }
    } catch (e) {
      console.log('Not possible write token');
    }
    const body = res.body;
    return body || {};
  }

}
