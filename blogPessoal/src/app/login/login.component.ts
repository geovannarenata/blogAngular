import { environment } from 'src/environments/environment.prod';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar()
  {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {this.userLogin = resp
    environment.token = this.userLogin.token
    /*console.log("Esse é nosso token " + environment.token) - visualizar no console
    localStorage.setItem('token', this.userLogin.token)  -Token enviado para localStorage*/
    this.router.navigate(['/home'])                         
  })
  }

}
