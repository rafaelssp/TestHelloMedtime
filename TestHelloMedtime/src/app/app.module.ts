import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { routing }  from './app.routes';
import { Http } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { IndexComponent } from './pages/index/index.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { AppComponent } from './app.component';
import { BotaoPadraoComponent } from './components/botao-padrao/botao-padrao.component';
import { FichaComponent } from './components/ficha/ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoPadraoComponent,
    IndexComponent,
    CadastroComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
