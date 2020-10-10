import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) 
  {
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin) 
  }

  cadastrar(user: User) 
  {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user) 
  }

  btnSair()
  {
    let ok = false
  /*  let token = localStorage.getItem('token') >> código anterior */
  
  /* refatoração do Token para Console e não localStorage*/
    let token = environment.token
    if (token != '')
    {
      ok = true
    }
    
    return ok
  }

  btnLogin()
  {
    
    let ok = false
  /*  let token = localStorage.getItem('token') >> código anterior */

  /* refatoração do Token para Console e não localStorage*/
    let token = environment.token

    if (token == '')  /* tirei o null por conta do environment */
    {
      ok = true
    }
    
    return ok
  }

}
