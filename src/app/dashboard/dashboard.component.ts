import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../core/models/hero.model';
import { HeroService } from '../core/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAll().subscribe((heroes) => (this.heroes = heroes.slice(1, 5))); //getHeroes é um observable de uma array de Hero. this.heroes é a nossa propriedade declarada acima. o heroes virá do retorno do getHeroes, o this.heroes vai receber ele. O SLICE (fatiar) irá mostrar do segundo ao quarto heroi, não irá engolbar o primeiro, pois ele é de posição 0 e nem o heroí de número 5.
  }
  onSelected(hero: Hero): void {
    this.router.navigate(['/heroes', hero.id]);
  }
}
