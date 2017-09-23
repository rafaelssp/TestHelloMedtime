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
  @Input() sexo: SexoEnum = SexoEnum.Empty;
  _id: number;


  constructor() { }

  ngOnInit() {
  }

}
