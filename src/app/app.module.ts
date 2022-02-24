import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //importei ele por causa do erro que estava dando com algumas tags personalizadas do HTML.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { HeroesModule } from './heroes/heroes.module';
//import { DashboardModule } from './dashboard/dashboard.module';
//import { HeroDetailComponent } from './heroes/components/hero-datail/hero-detail.component';
//import { HeroesComponent } from './heroes/components/heroes/heroes.component';

@NgModule({ //configuração de um modulo.
 //declarar qual componente faz parte do modulo. //
 declarations: [AppComponent],
  //importações necessárias para utilizar no projeto, devem ser delcaradas aqui.//
  imports: [
    //@angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,

    //third-party
    FlexLayoutModule,
    //app
    AppRoutingModule,
    CoreModule,
    AuthModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent], // iniciar no modulo um componente. Neste caso, então, é o AppComponent que está inciando.
})
export class AppModule { } //exportando o AppModule. quando se faz o exporte, pode-se importar em qualquer lugar. POR EX: no "main.ts" tem o AppModule importado, isso ocorreu pois o AppModule está importado aqui.
