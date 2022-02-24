import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//import { CommonModule } from '@angular/common'; //modulo comum do angular que possuí as diretivas...
const routes: Routes = [ //tipo da const é Router, em que serão especificados rotas, por meio de uma array.
  { path: '', component: HeroesComponent, canActivate: [AuthGuard]}, //path = atributo. component = componente inicial da rota, que é o HeroesComponent. Significa que, quando tiver o 'heroes' na URL será exibida a página com a lista dos heroes
  { path: ':id', component: HeroDetailComponent, canActivate: [AuthGuard]}, //Aqui, o PATH ficou vazio porque ele já está sendo carregado no app-routing-module.
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // para a aplicação inicial/raiz iniciar-se com a constante que criamos em cima. Importando o modulo que fará que as rotas fiquem disponíveis.
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
