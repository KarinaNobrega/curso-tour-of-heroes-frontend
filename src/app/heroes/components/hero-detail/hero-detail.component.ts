import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { HeroService } from '../../../core/services/hero.service';
import { Hero } from '../../../core/models/hero.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-detail', //o prefixo é para não ter elemento HTML semelhante. Pode mudar, mas terá que mudar no angular.json
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'] //o style deve ficar dentro dos parenteses

})

export class HeroDetailComponent implements OnInit {
  hero!: Hero; //o ponto de exclamação signifca que haverá o valor, porem não agora.
  //@Input() hero?: Hero; diz que o hero pode ser encherga de fora, outros components pode por valor para ela, ficando como pública. - Desativado por não usar mais
  isEditing = false; //propriedade, sem valor, que irá dizer se está ou não alterando. Mudou de isEditing!: boolean
  form = this.fb.group({
    id: [{value: '', disabled: true}],
    name: ['', [Validators.required, Validators.minLength(3)]], //para que o formulário fique válido, o nome deverá estar preenchido. Há dois validadores, o segundo refere-se ao tamanho mínimo.
  })

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar //segura as informações no momento da rota. - Ativar Rota
  ) {}

ngOnInit(): void {
  this.getHero();

}

getHero(): void {
  const paramId = this.route.snapshot.paramMap.get('id');
      //Tudo que vem da URL vem como uma string

    if (paramId !== 'new'){
      this.isEditing = true;

    const id = Number(paramId); //os parametros, normalmente, são string, logo, espera-se uma string, porém, aqui, solicitamos um número, então, é preciso colocar o chamado entre paranteses e avisar que é um Number. (modificamos o colocamos o chamado na const de cima)
    this.heroService.getOne(id).subscribe((hero) => {
      this.hero = hero;
      this.form.controls['id'].setValue(hero.id); //setar os valores
      this.form.controls['name'].setValue(hero.name);//busca de um hero
    });
  }
}
/* if (paramId === 'new') { //se o paramId for new, então ele irá adicionar
    this.isEditing = false;
    this.hero = { name: ''} as Hero; //em regre, deve-se colocar da seguinte forma: this.hero = {id: 1, name:  } para não dar erro. Porém, no caso do projeto em questão, não se tem id, logo, coloca-se o 'as Hero', permitido pelo TS. Vai criar um Hero, com nome vazio.
  } else { // senão, caso ele seja um número, irá o converter para number.
    this.isEditing = true;*/

  goBack(): void {
    this.location.back();
  }

  /* usado no form template.
  isFormValid(): boolean{
    return !! this.hero.name.trim(); //o trim é para que não seja permitido salvar nomes só com espaço, se puser letras, o botão habilita e poderá salvar o nome.*/

  // se vier vazio, formulário em branco = '' => false
  // se negar o vazio 1x = ! => true
  // negar o vazio 2x = !! => false

  create(): void {
    const { valid, value } = this.form;

    if (valid) {
      const hero: Hero = {
        name: value.name,
    } as Hero;
      this.heroService.create(hero).subscribe(() => this.goBack());
  } else {
    this.showErrorMsg();
  }
}

  update(): void{
    const { valid, value } = this.form;

    if (valid) {
      const hero: Hero = {
        id: this.hero.id,
        name: value.name,
      };

      this.heroService.update(hero).subscribe(() => this.goBack());
    } else {
      this.showErrorMsg();
    }
  }
  private showErrorMsg(): void{
    this.snackBar.open('Please check the errors found.' , 'OK', {
      duration: 5000,
      verticalPosition:'top'
    });
  }
}
