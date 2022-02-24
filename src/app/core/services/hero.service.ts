import { Hero } from './../models/hero.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from './messages.service';
import { HEROES } from './mock.heroes';
import { tap } from 'rxjs/internal/operators/tap'; //para funcionar, o tap precisou ser importado desta forma.

@Injectable({ //decoractor - service usa conceito de injeção -  o injectable significa que ao usarmos um service dentro de um component, ele será injetado. Assim poderemos usar todos os métodos, aqui, criados.
  providedIn: 'root' //Service será criado no momento inicial da aplicação.
})
export class HeroService {
    private heroesUrl = `${environment.baseUrl}/heroes`;

/* Quando se fala de uma api rest, fala-se em alguns verbos:
GET: Obter dados
PUT/PATCH: Alterar dados
POST: Criar novo dado
DELETE: Excluir dado
*/

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    //private loadingService: LoadingService --> se fosse colocar para cada um dos atributos. Neste caso, teria que ficar colocando um por um.
) {} //o primeiro messageService é o nome que eu quero atribuir para o service, o segundo MessageService é a class, exportada no messages.service.ts.
//método dentro do HeroService  que irá retornar à lista de Heroes.

//GET heroes
  getAll(): Observable<Hero[]> { // o this.heroes vai chamar esse getHeroes e retornar a lista fictícia, a qual será atibuída ao parâmetro heroes
    return this.http
    .get<Hero[]>(this.heroesUrl)
    .pipe(tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`)));

  }
/* antes era assim:
const heroes = of(HEROES); // o of vai transformar o mack em unm observable.
    this.log('fetched heroes');
    return heroes;
*/

//GET heroes/id
getOne(id: number): Observable<Hero> {
  return this.http
  .get<Hero>(this.getUrl(id))
  .pipe(tap((hero) => this.log(`fetched ${this.descAttributes(hero)}`)));
  }
 /* getOne(id: number): Observable<Hero> {  //o getHero vai retornar a apenas 1 herói, o hetHeroes retorna a lista completa.
  const hero = HEROES.find((hero) => hero.id === id)!; //find = método que vai percorar a cada item e quando a condição verdadeira for encontrada ele irá retornar para nós. Ou seja, se o hero for igual ao id oferecido, o hero receberá o valor. O exclamação é para avisar quando o id não existir.
  this.log(`fetched hero ID=${id} and Name=${hero.name}`); //crase devido ao template, literal do JS.
  return of(hero); //retornará no hero solicitado.*/

//GET/Heroes?name=term
search(term: string): Observable<Hero[]>{
  if (! term.trim()) {
    return of([]);
  }
  return this.http
  .get<Hero[]>(`${this.heroesUrl}?name=${term}`)
  .pipe(tap((heroes) => heroes.length
    ? this.log(`found ${heroes.length} hero(es) matching "${term}"`) //há alguma coisa no length?, se sim, retornará na questão abaixo. Dizendo o heroi. caso não de nada, mostrar que nenhum heroi foi encontrado.
    : this.log(`no hero(es) matching "${term}"`)
    )
  );
}
//POST /heroes/Create
create(hero: Hero): Observable<Hero> {
  return this.http
  .post<Hero>(this.heroesUrl, hero) //caminho + objeto. url: string; body e opções.
  .pipe(tap((hero) => this.log(`create ${this.descAttributes(hero)}`)));
}

//PUT /heroes/id/ Update --> put = alteração
update(hero: Hero): Observable<Hero> {
  return this.http
  .put<Hero>(this.getUrl(hero.id), hero)
  .pipe(tap((hero) => this.log(`update hero id=${hero.id} and name=${hero.name}`)));
}
//DELETE /heroes/id
delete(hero: Hero): Observable<any> {
  return this.http.delete<any>(this.getUrl(hero.id))
  .pipe(tap(() => this.log(`deleted ${this.descAttributes(hero)}`)));
}

private descAttributes(hero: Hero): string {
  return `Hero ID=${hero.id} and Name=${hero.name}`;
}

private log(message: string): void{
  this.messageService.add(`HeroService: ${message}`);
  }

private getUrl(id: number): string{
  return `${this.heroesUrl}/${id}`;
  }
}

/*

function tap(): import("rxjs").OperatorFunction<Hero[], Hero[]> {
  throw new Error('Function not implemented.');
}

Ele criou um outro private e simplificou os código anteriores devido ao novo private:

private descAttributes(hero: Hero): string {
  return `hero id=${hero.id} and name=${hero.name}`;
} criou para que se possa isolar a função em caso de alteração no código, mexer em apenas um lugar, ou seja, no private
...
 .pipe(tap((hero) => this.log(`update ${this.descAttributes(hero)}`) --> colocou desta forma todos os pipes.

*/
