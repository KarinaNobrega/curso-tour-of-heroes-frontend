import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean { //tem alguma coisa no Token ?
    this.authService.updateLoggedIn();
    if (localStorage.getItem('token')) { //sim, então retorna true e vai entrar na rota.
      return true;
    } else {
      this.router.navigate(['/login']); // se não tiver nada no token, ele vai navegar para a página de login e retornará falso.
      return false;
    }
  }
}


  // next: ActivatedRouteSnapshot,
  // state: RouterStateSnapshot
  // Observable<boolean | UrlTree> --> o canActivate tem vários retornos, no caso do projeto em questão, ele deixou apenas o boolean.
  // | Promise<boolean | UrlTree>
  // | boolean | UrlTree {
  //   return true;

