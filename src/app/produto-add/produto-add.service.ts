import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Produto } from '../produtos/produto'
import { Constants } from '../constants';

@Injectable()
export class ProdutoAddService {

  constructor(private http: Http, 
              private constants: Constants) { }

  post(produto: Produto): Promise<any>{
    produto.autoCompletar();
    console.info("POST - produtos")
    console.info(JSON.stringify(produto))
    console.info(this.token())

    let headers = new Headers({'Content-Type': 'application/json', 
                               'Authorization': this.token()});

    return this.http.post(this.constants.baseUrl + 'produtos', JSON.stringify(produto), { headers: headers } )
    .toPromise()
    .then(res => console.info(res.status) )
    .catch(this.handleError);
  }

  token(){
    return localStorage.getItem('user-token');
  }

  private handleError(error: any): Promise<any> {
    console.error('Erro na comunicação com o serviço de adicionar produto', error);
    return Promise.reject(error.message || error);
  }

}
