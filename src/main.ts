import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; //ligação do main com o AppModule. 
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} //está fazendo uma verificação. Se fosse "true", ele habilitaria o modo de produção, mas, ele está em "false". Então, ele só ocorrerá quando fizer um bilt para colocar em produção.

platformBrowserDynamic().bootstrapModule(AppModule) //a função bootstrap avisa que o module será iniciado, e o modulo, neste caso, é o AppModule
  .catch(err => console.error(err));
