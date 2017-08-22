import { Component, OnInit, Input } from '@angular/core';
import { AuthenticateService } from './authenticate.service'
import { Authenticate } from './authenticate'

@Component({
  selector: 'logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  constructor(private authenticationService: AuthenticateService) { }

  ngOnInit() {
  }

  authenticate(email:string , password:string){
    console.info(this.authenticationService.login(email , password));
    console.info(localStorage.getItem('user-token'))
  }

  logout(){
    this.authenticationService.logout();
  }

  token(){
    return localStorage.getItem('user-token')
  }
}
