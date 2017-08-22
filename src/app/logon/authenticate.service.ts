import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import { Authenticate } from './authenticate'; 

@Injectable()
export class AuthenticateService {

  constructor(private http: Http) { }

  login(email: string, password: string): Promise<String>{
    console.info(JSON.stringify({email: email, password: password}))

    let headers = new Headers({'Content-Type': 'application/json'});

    //return this.http.post('http://rehad.net.br/authenticate', JSON.stringify({email: email, password: password}), { headers: headers } )
    //                .map((response: Response) => {
    //                  console.error(response);
    //                  console.error(JSON.parse(response.json()));
    //                  let token = JSON.parse(response.json()).auth_token;
    //                  if(token){
    //                    localStorage.setItem('user-token', token)
    //                  }
    //                  return token;
    //                });
    //      

    return this.http.post('http://localhost:3000/authenticate', JSON.stringify({email: email, password: password}), { headers: headers } )
    .toPromise()
    .then(res => localStorage.setItem('user-token', res.json().auth_token) )
    .catch(this.handleError);
  }

  logout(){
    localStorage.removeItem('user-token');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
