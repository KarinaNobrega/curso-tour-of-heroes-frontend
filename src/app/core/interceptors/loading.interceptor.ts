import { LoadingService } from './../services/loading.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor { //o LoadingInterceptor faz a implementação de HttpInterceptor, a qual exige que tenhamos um método.
  private activeRequests = 0; //sem requisições

  constructor(private loadingService: LoadingService) {}
//Método intercept:
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.activeRequests === 0) { //se não tiver nenhuma requisição feita, o valor será true
      this.loadingService.show();
    }
    this.activeRequests++; // = + 1 no valor do activeRequests

  return next.handle(request).pipe( //ao finalizar o valor da requisição, vai diminuir mais 1.
    finalize(() => { //cok o pipe, ele irá dizer para finalizar o loading. e voltar a 0 o activeRequests, escondendo o loading. 
    this.activeRequests--; //diminuirá o valor do activeRequests

    if(this.activeRequests === 0){
      this.loadingService.hide();
        }
      })
    ); //antes de a requisição ser feita, pode-se fazer uma operação
  }
}
