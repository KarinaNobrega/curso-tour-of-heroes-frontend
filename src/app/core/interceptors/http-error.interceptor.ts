import { MessageService } from './../services/messages.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (!environment.production) { // se estiver em produção, a msg não irá aparecer caso ele abra o developtools
          console.log(err); // se NÃO estiver em produção, aparecerá o console.log
        }
        let errorMsg = '';
        if (err.error instanceof ErrorEvent){
          errorMsg = `Error: ${err.error.message}`;
      } else if (Array.isArray(err.error) && err.error.length){ //se o error é um array e se está diferente de vazio
        errorMsg = `Error: ${err.error[0]}`; //pega o primeio item do array
      } else if (err.error.errors) {
        errorMsg = `Error ${err.error.errors}`;
      } else {
        errorMsg = `Error Code: ${err.status}, Message: ${err.message}`
      }
        this.messageService.add(errorMsg);
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
