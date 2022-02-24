import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor(public loadingService: LoadingService) {
//this.loadingService.loading$.subscribe --> o subscribe é o responsável por disparar a informação, qualquer alteração que ocorrer ele é responsável em executar. Foi desta forma que foi feito no heroes.component. Aqui, neste caso, foi colcado diretamento no template. 
   }


}
