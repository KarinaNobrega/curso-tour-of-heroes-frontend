import { AuthGuard } from './../auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

//import { CommonModule } from '@angular/common'; //modulo comum do angular que possuí as diretivas...
const routes: Routes = [ //tipo da const é Router, em que serão especificados rotas, por meio de uma array.
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard] //o canActivate é um array. o AuthGuard tem que retornar true para ser guardado no canActivate
  }, //path = atributo. component = componente inicial da rota, que é o HeroesComponent. Significa que, quando tiver o 'heroes' na URL será exibida a página com a lista dos heroes. Aqui, o PATH ficou vazio porque ele já está sendo carregado no app-routing-module.
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // para a aplicação inicial/raiz iniciar-se com a constante que criamos em cima. Importando o modulo que fará que as rotas fiquem disponíveis. -forRoot usado em um único lugar,que está no app-routing-module, então, aqui precisou trocar para o forChild, modulo filho do módulo principal.
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
