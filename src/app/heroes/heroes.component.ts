import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = { //exibir no template (component.html). Está importando no hero.model.ts. 
    id: 1,
    name: 'Thor',
};

  constructor() { } //iniciar variável, injeção de dependências.

  ngOnInit(): void { //faz parte do ciclo de vida do component. Logo após o component ser criado, ele executará tudo o que estiver no OnInit. vois = não retorna nada.
  }

}
