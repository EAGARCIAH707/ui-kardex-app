import {Injectable} from '@angular/core';
import {MainService} from '../main/mainService';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KardexService extends MainService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getKardex(): Observable<any> {
    return this.get(`${environment.get_kardex}`);
  }

  addIn(payload: any): Observable<any> {
    return this.post(`${environment.add_in}`, payload);
  }

  addOut(payload: any): Observable<any> {
    return this.post(`${environment.add_out}`, payload);
  }
}
