import { Injectable } from '@angular/core';
import { FichaComponent } from '../../components/ficha/ficha.component';

@Injectable()
export class FichaService {

  constructor() { }

  cadastrar(ficha: FichaComponent) {

    console.log(ficha);
    return ficha;
  }
}
