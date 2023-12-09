import { Component, Input } from '@angular/core';

import { LocalizacaoComponent } from '../../I18N/localizacao.component';
import { LocalizacaoHelper } from 'src/app/I18N/localizacao.helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends LocalizacaoComponent {

  @Input() titulo!: string;

  constructor () {
    super();
  }

  public informaNovaLinguagem(linguagem: string): void {
    // informa nova linguagem
    LocalizacaoHelper.setaLocalizacaoAtual(linguagem);
    // recarrega página
    window.location.reload();
  }

}
