import { Component, OnInit, Input } from '@angular/core';
import { SexoEnum } from '../../../environments/environment';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  @Input() nomeCompleto: string;
  @Input() idade: string;
  @Input() sexo: string = "0";
  _id: number;


  constructor() { }

  ngOnInit() {
  }

}
