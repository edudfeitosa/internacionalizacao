import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
import localeEsMx from '@angular/common/locales/es-MX';
import localeEsMxExtra from '@angular/common/locales/extra/es-MX';
import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalizacaoHelper } from './I18N/localizacao.helper';
import { Recursos } from './I18N/recursos.class';
import { HeaderComponent } from './componentes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID, useFactory: () => LocalizacaoHelper.getLocalizacaoAtual()
  }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

  constructor(private http: HttpClient) {
    // pré-carrega todas as localizações
    registerLocaleData(localePt, 'pt', localePtExtra);
    registerLocaleData(localeEsMx, 'es-MX', localeEsMxExtra);
    registerLocaleData(localeEn, 'en', localeEnExtra);

    // import dinâmico
    this._carregaDadosLinguagens();
  }

  private _carregaDadosLinguagens(): void {
    this.http.get<any>(`/assets/linguagens/recursos.${LocalizacaoHelper.getLocalizacaoAtual().toLowerCase()}.json`)
      .pipe(take(1)).subscribe(localidade => {
        for (const CHAVE in localidade) {
          (<any>Recursos)[CHAVE] = localidade[CHAVE];
        }
      });
  }

}
