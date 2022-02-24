import { DialogData } from './../../../core/models/dialog-data.model';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';
//import { MessageService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
/* exemplo 1:
hero: Hero = { --> exibir no template (component.html). Está importando no hero.model.ts.
    id: 1,
    name: 'Thor',
};*/
displayedColumns: string[] = ['id', 'name', 'actions'];
heroes: Hero[] = [];
//selectedHero?: Hero; --> não tem nada selecionado, não tema tribuição, então, coloca-se o ponto de interrogação, para que assim, ele seja: Ou do tipo Hero (quando houver atribuição) ou indefinido. - Desativada pois não irá usar mais.

  // constructor() { } --> iniciar variável, injeção de dependências.
constructor(
  private dialog: MatDialog,
  private heroService: HeroService) {}
 // private messageService: MessageService) {} ou seja, o HeroService será private (privado), só será enchergado dentro deste arquivo, não sendo possível ser acessado dentro do template. - Desativado por não usar mais

  ngOnInit(): void { //faz parte do ciclo de vida do component. Logo após o component ser criado, ele executará tudo o que estiver no OnInit. vois = não retorna nada.
    this.getHeroes();
}

  getHeroes(): void {
    this.heroService.getAll().subscribe((heroes) => (this.heroes = heroes));
}

  delete(hero: Hero): void {
    console.log(hero);
    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      content: `Delete '${hero.name}'?`
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: dialogData,
      width: '300px'
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService.delete(hero).subscribe(() => this.getHeroes()); //chamando o backend de novo
      }
    });
  }
  onSelected(hero : Hero): void {
    this.delete(hero); //ao fizer uma busca, ao trazer e ser selecionado irá cair no onSelected e vai ser chamado o método delete, passando o hero para o Hero.
  }
}

/*Ele usou duas formas no delete, a primeira faz com que o chamado não retorne ao getHeroes. com a função filter, ele percorrerá heroí por heroí para chegar até o escolhido no delete.
delete(hero: Hero): void {
  this.heroService.delete(hero).subscribe(() =>{
    this.heroes = this.heroes.filter((h) => h !== hero)
  })
*/

/*o heroes é o 'heroes' que está sendo exportado acima, com um array de Hero e fazendo com que ele receba o getHeroes que é do HeroService. getHeroes é do tipo Observable, então, precisa colocar o .subscribe (que tem a função de nos avisar quando ocorrer uma mudança no getHeroes. Dentro do .subscribe tem o retorno da variável, informando que o this.heroes será igual ao heroes. O heroes do retorno  será o retorno de thi.heroes.  )*/

/* FORMAS DE ADICIONAR AS FASES DO OBSERVABLE
this.heroService.getHeroes().subscribe(
  (value) => {              --> neste formato, quando o retorno é uma linha, apenas, de código, NÃO precisa abrir e fechar chaves. Tira-se as chaves e os ;
    console.log(value);
  },
  (err) => {
    console.log(err);
  },
  () => {
    console.log('Função concluída com sucesso');
  }
)


this.heroService.getHeroes().subscribe(function(value){
    console.log(value);
  },
  function(err) {
    console.log(err);
  },
  function(){
    console.log('Função concluida');
  });
*/
/* this.heroService.getHeroes().subscribe({
   next(x) { //função OBRIGATÓRIA para que o subscribe ocorra
     console.log('got value' + JSON.stringify(x, null, 2));
   },
   error(err) {
     console.error('Somenthing wrong ocurred: ' + err);
  },
  complete() {
    console.log('done');
  },
 });*/

/*
RETIRADO O onSelect pois não é mais útil, após implementar o routerLink="/heroes/{{ hero.id }}".

onSelect(hero: Hero): void{ //onSelect recebe "()" .  Parametro= (hero: Hero).  Retorno: void (que retornará em nada)
    this.selectedHero = hero; // this= no contexto da classe, poderá ser acessado o hero (primeiro nome atribuido, que está acima); heroes (a lista); onSelect (esse que estamos usando) ou o selectedHero (que é o que iremos usar aqui.)
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`); //irá aparecer um mensahem com o id do Heroi. Para simplificar, caso queira colocar mais alguma atributo como mensagem, colocar entre crase, adiciona o ${} e dentro das colchetes você coloca o parâmetro de msg.
  }
*/

