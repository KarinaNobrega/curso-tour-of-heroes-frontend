import { PageNotFoundComponent } from './core/components/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { CommonModule } from '@angular/common'; //modulo comum do angular que possuí as diretivas...
const routes: Routes = [ //tipo da const é Router, em que serão especificados rotas, por meio de uma array.
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  //path = atributo. component = componente inicial da rota, que é o HeroesComponent. Significa que, quando tiver o 'heroes' na URL será exibida a página com a lista dos heroes
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((m)=> m.DashboardModule),
  }, //quando rodar o dashboard ou o heroes, ai sim será importado e será executados. Desta forma, saiam do main e serão carregados apenas quando necessário.
  {
    path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], // para a aplicação inicial/raiz iniciar-se com a constante que criamos em cima. Importando o modulo que fará que as rotas fiquem disponíveis.
  exports: [RouterModule]
})
export class AppRoutingModule { }
