import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'

import { LocalizacaoComponent } from './I18N/localizacao.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends LocalizacaoComponent implements OnInit {

  public dataAtual = new Date();
  formCadastro!: FormGroup;
  
  constructor (
    private formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.criaFormulario();
  }

  private criaFormulario(): void {
    this.formCadastro = this.formBuilder.group({
      primeiroNome: [''],
      sobrenome:[''],
      idade: ['']
    }, {
      validators: Validators.compose(this.validacaoCamposForm())
    });
  }

  private validacaoCamposForm(): Array<any> {
    let itensValidacao = [
      this.validaCampoPrimeiroNome,
      this.validaCampoSobrenome,
      this.validaCampoIdade
    ]
    return itensValidacao;
  } 


  private validaCampoPrimeiroNome(controle: AbstractControl): any {
    if (controle.get('primeiroNome')?.value) {
      controle.get('primeiroNome')?.setErrors(null);
      return null;
    }
    controle.get('primeiroNome')?.setErrors({ erro: true });
  }

  private validaCampoSobrenome(controle: AbstractControl): any {
    if (controle.get('sobrenome')?.value) {
      controle.get('sobrenome')?.setErrors(null);
      return null;
    }
    controle.get('sobrenome')?.setErrors({ erro: true });
  }

  private validaCampoIdade(controle: AbstractControl): any {
    if (controle.get('idade')?.value) {
      controle.get('idade')?.setErrors(null);
      return null;
    }
    controle.get('idade')?.setErrors({ erro: true });
  }

}
