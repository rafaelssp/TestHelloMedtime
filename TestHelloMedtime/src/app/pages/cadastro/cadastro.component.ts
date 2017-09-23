import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { FichaService } from '../../components/ficha/ficha.service';
import { FichaComponent } from '../../components/ficha/ficha.component';
import { BotaoPadraoComponent } from '../../components/botao-padrao/botao-padrao.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [FichaService]
})
export class CadastroComponent implements OnInit {

  _service: FichaService;
  meuForm: FormGroup;
  ficha: FichaComponent = new FichaComponent();
  fichasCadastradas: FichaComponent[] = [];
  mensagemAviso: string = "";

  constructor(service: FichaService, fb: FormBuilder) { 

    this._service = service;
    
    this.meuForm = fb.group({
      nomeCompleto: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      idade: ['', Validators.required],
      sexo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.meuForm.markAsPristine();
  }

  cadastrar(event) {

    event.preventDefault();
    let novaFicha = this._service.cadastrar(this.ficha);
    this.fichasCadastradas.push(Object.assign({}, novaFicha));
    console.log(this.fichasCadastradas);
    this.resetarFormCadastro();
  }

  private resetarFormCadastro() {
    this.meuForm.reset();
    this.meuForm.controls["sexo"].setValue("0");
  }
}
