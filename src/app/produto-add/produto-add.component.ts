import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { AuthenticateService } from '../logon/authenticate.service';
import { ProdutoAddService } from './produto-add.service';
import { Produto } from '../produtos/produto'

@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.component.html',
  styleUrls: ['./produto-add.component.css']
})
export class ProdutoAddComponent implements OnInit {
  produto: Produto = new Produto;
  errorMessage: string = null;
  successMessage: string = null;
  title: string = "Adicionar Produto"

  formatos = [
    {value: '1', viewValue: 'Caixa / Pacote'},
    {value: '2', viewValue: 'Rolo / Prisma'},
    {value: '3', viewValue: 'Envolope'}
  ];

  constructor( public authenticate:AuthenticateService,
               private produtoAddService: ProdutoAddService,
               private router: Router,
              public snackBar: MdSnackBar ) { }

  ngOnInit() {
    if (!this.authenticate.token()) {
      this.router.navigate(['logon']);
    }
  }

  salvar(){
    if(!this.authenticate.token()){
      console.info(this.authenticate.token()); 
      return this.errorMessage = "Precisa estar logado";
    }
    console.info(this.produto); 
    let response;
    this.produtoAddService.post(this.produto)
                          .then(resp => this.sucesso(resp))
                          .catch(error => this.openSnackBar("ERRO" + error._body, "Fechar"));
  }

  formatoMudou(){
    console.info("mudou mesmo?")
    this.produto.limpaValores()
  }

  sucesso(resp){
    this.produto = new Produto;
    this.openSnackBar("Inserido com sucesso", "Fechar")
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 0,
    });
  }
}
