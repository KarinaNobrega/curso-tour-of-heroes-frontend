import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';

@NgModule({ //configuração de um modulo.
  declarations: [ //declarar qual componente faz parte do modulo.
    AppComponent, HeroesComponent
  ],
  imports: [ //importações necessárias para utilizar no projeto, devem ser delcaradas aqui.
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // iniciar no modulo um componente. Neste caso, então, é o AppComponent que está inciando.
})
export class AppModule { } //exportando o AppModule. quando se faz o exporte, pode-se importar em qualquer lugar. POR EX: no "main.ts" tem o AppModule importado, isso ocorreu pois o AppModule está importado aqui.
