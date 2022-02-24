import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { CommonModule } from '@angular/common'; //modulo comum do angular que possuí as diretivas...
const routes: Routes = [{ path: '', component: LoginComponent}]; //rota de login para abrir o componente login.

@NgModule({
  imports: [RouterModule.forChild(routes)], // para a aplicação inicial/raiz iniciar-se com a constante que criamos em cima. Importando o modulo que fará que as rotas fiquem disponíveis.
  exports: [RouterModule],
})
export class AuthRoutingModule { }
