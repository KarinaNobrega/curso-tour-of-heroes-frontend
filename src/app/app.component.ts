import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { MenuItem } from './core/models/menu-item.model';

@Component({ //DECORATOR --> dizendo que a classe é um componente e que tem algumas entradas.
  selector: 'app-root', // usada em outros lugares. Usado no index.html
  templateUrl: './app.component.html', // url
  styleUrls: ['./app.component.scss'] //array, podendo adicionar outro arquivo de estilos.
})

export class AppComponent { //uma vez exportado aqui, ele poderá ser importado em qualquer lugar, tal como no AppModule, declarations e em bootstrap.
  isLoggedIn$: Observable<boolean>;
  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      routerLink: '/dashboard',
      toolTipText: 'Dashboard'
    },
    {
      icon: 'sports_martial_arts',
      routerLink: '/heroes',
      toolTipText: 'Heroes',
    },
  ];
  title = 'Tour of Heroes';

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$; //o app está oberservando qualquer alteração que ocorrer no isLoggedIn lá do authService. Ou seja, fazendo o login e logout, ele irá receber o valor.
  }

  onLogout(): void {
    this.authService.logout();
  }
}
