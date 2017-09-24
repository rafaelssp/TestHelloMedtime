import { Pipe, PipeTransform } from '@angular/core';
import { FichaComponent } from '../../components/ficha/ficha.component';

@Pipe({
  name: 'filtraFichaNome',
  pure: false
})
export class FiltroNomePipe implements PipeTransform {

  transform(fichas: FichaComponent[], nome: string): FichaComponent[] {

    nome = nome.toUpperCase();
    return fichas.filter(f => f.nomeCompleto.toUpperCase().includes(nome));
  }
}
