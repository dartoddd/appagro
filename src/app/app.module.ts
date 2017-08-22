import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {  MaterialModule } from './material.module';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { LogonComponent } from './logon/logon.component';
import { AuthenticateService } from './logon/authenticate.service'

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LogonComponent
  ],
  providers: [AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
