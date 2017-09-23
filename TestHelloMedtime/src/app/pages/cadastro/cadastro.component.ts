import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

import { FichaService } from '../../components/ficha/ficha.service';
import { FichaComponent } from '../../components/ficha/ficha.component';
import { BotaoPadraoComponent } from '../../components/botao-padrao/botao-padrao.component';
import { SexoEnum } from '../../../environments/environment';

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
  isAlteracao: boolean = false;

  constructor(service: FichaService, fb: FormBuilder) { 

    this._service = service;
    
    this.meuForm = fb.group({
      nomeCompleto: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      idade: ['', Validators.required],
      sexo: ['', Validators.required]
    });

    this.carregarPacientesIniciais();
  }

  ngOnInit() {
    this.meuForm.markAsPristine();
  }

  cadastrar(event) {

    event.preventDefault();
    let novaFicha = this._service.cadastrar(this.ficha);

    novaFicha._id = this.fichasCadastradas.length + 1;
    this.fichasCadastradas.push(Object.assign({}, novaFicha));
    console.log(novaFicha);

    this.resetarFormCadastro();
  }

  deletar(fichaId: number) {
    let ficha = this.fichasCadastradas.filter(x => x._id == fichaId)[0];
    this.fichasCadastradas = this._service.deletar(this.fichasCadastradas, ficha);
  }

  alterarFicha() {
    this.fichasCadastradas = this._service.alterar(this.fichasCadastradas, this.ficha);
    this.resetarFormCadastro();
  }

  alterar(ficha: FichaComponent) {
    this.isAlteracao = true;
    this.ficha = Object.assign({}, ficha);
  }

  private resetarFormCadastro() {
    this.meuForm.reset();
    this.meuForm.controls["sexo"].setValue("0");
    this.ficha = new FichaComponent();
    this.isAlteracao = false;
  }

  private carregarPacientesIniciais() {
    let pacienteDaniel = new FichaComponent();
    pacienteDaniel._id = 0;
    pacienteDaniel.nomeCompleto = "Daniel Swater";
    pacienteDaniel.idade = "25";
    pacienteDaniel.sexo = "1";

    this.fichasCadastradas.push(pacienteDaniel);
  }
}
