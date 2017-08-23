import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Authenticate } from './authenticate'; 
import { Constants } from '../constants';

@Injectable()
export class AuthenticateService {

  constructor(private http: Http, private constants: Constants) { }

  login(email: string, password: string): Promise<String>{
    console.info(JSON.stringify({email: email, password: password}))

    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.constants.baseUrl+'/authenticate', JSON.stringify({email: email, password: password}), { headers: headers } )
    .toPromise()
    .then(res => localStorage.setItem('user-token', res.json().auth_token) )
    .catch(this.handleError);
  }

  logout(){
    localStorage.removeItem('user-token');
  }

  token(){
    return localStorage.getItem('user-token');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
