import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {baseUrl} from '../httpBaseUrl/httpBaseUrl';

@Injectable()
export class AuthService {

  constructor(public http: HttpClient) { }

  login(payload) {
    const endPoint = baseUrl + '/admin/login';

    return this.http.post(endPoint, payload);
  }
}
