import { TokenInterceptor } from './interceptors/token.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MaterialModule  } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MessagesComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule

  ],
  exports: [
    MessagesComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    LoadingComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
//quando usar tags html personalizadas, ele informará os erros de análise do modelo. Uma tag personalizada é uma tag que você usa em seu HTML que NÃO é uma dessas tags. Os esquemas (schemas) de linha: [ CUSTOM_ELEMENTS_SCHEMA ] precisam ser adicionados a cada componente onde você está usando tags HTML personalizadas.Por esse motivo, coloquei o CUSTOM_ELEMENTS_SCHEMA aqui, desta forma, o erro que estava dando no messages.component parou e funcionou.
  ],
  providers: [ //array com entrada.
    {
      provide: HTTP_INTERCEPTORS, //nome dele/tipo dele. Faz parte do Angular como HTTP
      useClass: LoadingInterceptor, // usará a classe LoadingInterceptor
      multi: true, //caso seja necessário obter mais de um interceptor que irá usar outra classe.
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true, //caso seja necessário obter mais de um interceptor que irá usar outra classe.
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
})
export class CoreModule { //coreModule não ser importado em outros modulos.
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){ //variável parentModule com duas diretivas, uma vez que ela é opcional e a skipeself. Uma vez que o CoreModule for importado, o aprentModule receberá um valor, carregamento do CoreModule, se um segundo for tentar carregar vai lançar uma exceção avisando que ele já foi importado, solicitando que ele seja carregado no AppModule.
    if(parentModule){ //if é o 'se'.
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule.');
    }
  }
}

