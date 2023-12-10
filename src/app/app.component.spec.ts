import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componentes/header/header.component'

describe(AppComponent.name, () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve renderizar o componente realizando todos os imports necessários', () => {
    expect(component).toBeTruthy();
  });

  it('deve criar o form', () => {
    expect(component.formCadastro).toBeDefined();
  });

  it('deve validar o campo primeiroNome', () => {
    const form = component.formCadastro;
    const firstNameControl = form.get('primeiroNome');
    firstNameControl?.setValue('');
    expect(firstNameControl?.hasError('erro')).toBe(true);
    firstNameControl?.setValue('John');
    expect(firstNameControl?.hasError('erro')).toBe(false);
  });

  it('deve validar o campo sobrenome', () => {
    const form = component.formCadastro;
    const lastNameControl = form.get('sobrenome');
    lastNameControl?.setValue('');
    expect(lastNameControl?.hasError('erro')).toBe(true);
    lastNameControl?.setValue('Doe');
    expect(lastNameControl?.hasError('erro')).toBe(false);
  });

  it('deve validar o campo idade', () => {
    const form = component.formCadastro;
    const ageControl = form.get('idade');
    ageControl?.setValue('');
    expect(ageControl?.hasError('erro')).toBe(true);
    ageControl?.setValue(25);
    expect(ageControl?.hasError('erro')).toBe(false);
  });
});