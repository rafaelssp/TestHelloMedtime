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
    let indice = fichasCadastradas.findIndex(f => f._id == ficha._id);
    fichasCadastradas.splice(indice, 1);
    return fichasCadastradas;
  }

  alterar(fichasCadastradas: FichaComponent[], fichaAtualizar: FichaComponent): FichaComponent[] {
    return fichasCadastradas.map(function (param , index) {
        if (fichasCadastradas[index]._id == fichaAtualizar._id) {
          fichasCadastradas[index]._id  = fichaAtualizar._id;
          fichasCadastradas[index].nomeCompleto  = fichaAtualizar.nomeCompleto;
          fichasCadastradas[index].idade  = fichaAtualizar.idade;
          fichasCadastradas[index].sexo  = fichaAtualizar.sexo;
        }
        return param;
     });
  }
}
