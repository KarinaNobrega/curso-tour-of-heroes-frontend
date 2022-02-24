import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token') || '';

    // if(!token) { //se não tiver o token no localstorage, vai fazer com que gere um token novo e entre na variável adicionando no localstorage e por conseguinte no request
    //  token = this.generateToken();
    // localStorage.setItem('token', token); //setar no token o valor que obteve do token.
    // }

      request = request.clone({ //clonou o request
        setHeaders: {
          Authorization: token,
        }
      });

    return next.handle(request);
  }

  // private generateToken(): string {
  //  return Math.random().toString(36).substring(2,12);
  // }
}
