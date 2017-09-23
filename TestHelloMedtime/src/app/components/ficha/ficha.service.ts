import { Injectable } from '@angular/core';
import { FichaComponent } from '../../components/ficha/ficha.component';
    
@Injectable()
export class FichaService {

  constructor() { }

  cadastrar(ficha: FichaComponent): FichaComponent {
    // serviço fake
    return ficha;
  }

  deletar(fichasCadastradas: FichaComponent[], ficha: FichaComponent): FichaComponent[] {
    var indice = fichasCadastradas.findIndex(f => f._id == ficha._id);
    fichasCadastradas.splice(indice, 1);
    return fichasCadastradas;
  }
}
