import { Component } from '@angular/core';

@Component({ //DECORATOR --> dizendo que a classe é um componente e que tem algumas entradas.
  selector: 'app-root', // usada em outros lugares. Usado no index.html
  templateUrl: './app.component.html', // url
  styleUrls: ['./app.component.scss'] //array, podendo adicionar outro arquivo de estilos.
})
export class AppComponent { //uma vez exportado aqui, ele poderá ser importado em qualquer lugar, tal como no AppModule, declarations e em bootstrap.
  title = 'Tour of Heroes';
}
