import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LoginModule } from './modules/login/login.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';
import { ModuloRoteamento } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    CadastroModule,
    CaixaDeEntradaModule,
    ModuloRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
