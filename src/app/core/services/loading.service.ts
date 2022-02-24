import { Observable } from 'rxjs';
//responsável por dizer se será exibido ou não o Loading.
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false); //private para não alterar os valores dele.

//atributo:
  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  // o sinal $ significa observable.
  //o loadingSubject tem valores que podem ser mudados, por isso criou o loading$ para especificar só o observable dele. Ou seja, o Subject é origem do dados como também um observável. O observable dele é o loading$.
  //LoandingService = loading$
  //valores:
  hide(): void {
    this.loadingSubject.next(false); //esconder
  }
  show(): void {
    this.loadingSubject.next(true); //aparecer
  }
}
