import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../model/UsuarioModel';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
    return this.http.post('http://localhost:9000/usuarios/logar', userLogin)
  }

  cadastrar(user: UsuarioModel){
    return this.http.post('http://localhost:9000/usuarios/cadastrar', user)
  }

  btnSair() {
    let ok = false;
    let token = localStorage.getItem('token');

    if (token != null) {
      ok = true;
    }
    return ok;
  }

  btnLogin() {
    let ok = false;
    let token = localStorage.getItem('token');

    if (token == null) {
      ok = true;
    }
    return ok;
  }

  btnFeed() {
    let ok = false;
    let token = localStorage.getItem('token');

    if (token != null) {
      ok = true;
    }
    return ok;
  }
}
