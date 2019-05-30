import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

import { UsuarioDto } from 'src/app/models/dto/usuarioDto';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  constructor(private toastr: ToastrService, private roteader: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  mensagensErro: string = '';

  nome = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  senha = new FormControl('');
  telefone = new FormControl('');
  avatar = new FormControl('', [Validators.required, this.validaImagem.bind(this)]);

  formCadastro = new FormGroup({
    nome: this.nome,
    username: this.username,
    senha: this.senha,
    telefone: this.telefone,
    avatar: this.avatar
  }, { updateOn: 'blur' })

  validaImagem(controle: AbstractControl): Observable<ValidationErrors | null> {
    const url = controle.value;
    if (!url) {
      console.log('url vazia');
      return null;      
    }    

    this.http
      .head(url, { observe: 'response' })
      .pipe(
        map((response) => {
          if (response.ok) {
            console.log('funcionou');
            return null;
          } else {
            console.error('deu ruim');
            return { ulrInvalida: 'A url apresentou problemas' };
          }
        }),
        catchError((response) => {
          console.warn('Caiu no catchError');
          console.log(response);

          let erroMsg = {
            urlInvalida: 'URL com bloqueio de CORS',
            status: response.status
          }

          return [erroMsg];
        })
      ).subscribe();
  }

  cadastrarUsuario() {
    if (this.formCadastro.pristine || this.formCadastro.invalid) {
      this.showFail('Preencha corretamente todos os campos');
      return;
    }

    const userData = new UsuarioDto(this.formCadastro.value);

    this.http
      .post('http://localhost:8080/users', userData)
      .subscribe(
        (response) => {
          this.showSuccess();
          this.formCadastro.reset();
        },
        (responseError: HttpErrorResponse) => {

          this.mensagensErro = responseError.error.body;
          this.showFail('Não foi possivel concluir a solicitação');
        },
        () => {
          setTimeout(() => {
            this.roteader.navigate(['']);
          }, 1000);
        }
      );
  }

  showSuccess() {
    this.toastr.success('Usuário cadastrado com sucesso', 'CMail');
  }

  showFail(mensagem: string) {
    this.toastr.error(mensagem, 'CMail');
  }
}
