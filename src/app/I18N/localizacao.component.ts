import { Recursos } from './recursos.class';
import { LocalizacaoHelper } from './localizacao.helper';

export class LocalizacaoComponent {
  public recursos = Recursos;
  public localizacaoId: string = '';

  constructor () {
    this.localizacaoId = LocalizacaoHelper.getLocalizacaoAtual();
  }
}