import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MainService} from '../main/mainService';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends MainService {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  createProduct(payload): Observable<any> {
    return this.post(`${environment.create_product}`, payload);
  }

}
