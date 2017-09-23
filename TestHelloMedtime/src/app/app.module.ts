import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }  from './app.routes';
import { Http } from '@angular/http';

import { IndexComponent } from './pages/index/index.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { AppComponent } from './app.component';
import { BotaoPadraoComponent } from './components/botao-padrao/botao-padrao.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoPadraoComponent,
    IndexComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
