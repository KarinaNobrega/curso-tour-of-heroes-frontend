import { HeroService } from './../../../core/services/hero.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  @Input() label = '';

  private searchTerm = new Subject<string>();
  @Output() private selected = new EventEmitter<Hero>(); //eventemitter é a forma de mandarmo de volta para quem está chamando, ou seja, do component filho para o component pai.

  constructor(private heroService: HeroService) {} //origem dos dados será modificada a cada digitação pelo this.searchTerm.next(term)

  ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(600), //função em que não irá, no backend, retornar letra por letra, dentro dos 6milesegundos.
      distinctUntilChanged(), //caso apague ultima(as) letras da palavra e a reescreva, dentro dos 6mseg, não irá, no backend, retornar à palavra novamente, ou seja, ocorrerá apenas uma chamada.
      switchMap((term) => this.heroService.search(term)));
  }

  onSelected(selectedItem: MatAutocompleteSelectedEvent): void {
    this.searchTerm.next(''); //a caixa de pesquisa, ao clicar em 'cancelar' ela ficará limpa, para digitar outro nome, ao invés de voltar a palavra que cancelou. 

    const hero: Hero = selectedItem.option.value;
    this.selected.emit(hero); //vai emitir um valor para quem estiver ouvindo, usar o valor. Ou seja, o component está jogando o hero e o dashboard vai pegar e atuar.
  }

  search(term: string): void { //search receberá um termo e retornará void.
    this.searchTerm.next(term);
  }
}
