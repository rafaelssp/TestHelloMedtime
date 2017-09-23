import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botao-padrao',
  templateUrl: './botao-padrao.component.html',
  styleUrls: ['./botao-padrao.component.scss']
})
export class BotaoPadraoComponent implements OnInit {

  @Input() nome: string = 'Enviar';
  @Input() estilo: string = 'btn-default';
  @Input() tipo: string = 'button';
  @Input() desabilitado: boolean = false;
  @Output() acao = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  executaAcao() {

    this.acao.emit(null);
  }
}
