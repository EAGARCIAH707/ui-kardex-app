import {Injectable} from '@angular/core';
import {MainService} from '../main/mainService';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends MainService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  login(payload): Observable<any> {
    return this.post(`${environment.login_endpoint}`, payload, {observe: 'response'});
  }
}
