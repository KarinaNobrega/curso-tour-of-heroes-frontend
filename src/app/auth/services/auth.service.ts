import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // manter privado para que não seja alterado em outro momento.

  isLoggedIn$ = this.loggedIn.asObservable(); //conversão da variável tipo observable, colocando o sinal de $ para identificar que é um observable.

  constructor(private router: Router) { }

  login(credentials: Credentials): void {
    localStorage.setItem('token', credentials.password);
    this.updateLoggedIn(); //alterar o valor do private. assim poderá mudar os botões na toolbar.
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    localStorage.clear();
    this.updateLoggedIn();
    this.router.navigate(['/login']);
  }

  updateLoggedIn(): void { //com este método, toda vez que atualizar a página, ele não irá para o logout, permanecerá logado, ou seja, não tem que fazer o login novamente. O mesmo serve para quando eu limpar o token, ele entenderá que você deslogou, então, vai para a página de login.
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }
}
