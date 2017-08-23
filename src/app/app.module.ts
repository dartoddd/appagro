import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import {  MaterialModule } from './material.module';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { LogonComponent } from './logon/logon.component';
import { ProdutoAddComponent } from './produto-add/produto-add.component';
import { ProdutosComponent } from './produtos/produtos.component';

import { AuthenticateService } from './logon/authenticate.service';
import { ProdutoAddService } from './produto-add/produto-add.service';
import { Constants } from './constants';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LogonComponent,
    ProdutoAddComponent,
    ProdutosComponent
  ],
  providers: [AuthenticateService, ProdutoAddService, Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
