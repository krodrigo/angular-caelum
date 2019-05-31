import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { LoginService } from 'src/app/services/login.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private roteader: Router,
    private toastr: ToastrService,
    private servico: LoginService,
    private pageService: PageDataService) { }

  ngOnInit() {
    this.pageService.atualizarTitulo('Login');
    this.servico.logoff();
  }

  email = new FormControl('', [Validators.required]);
  senha = new FormControl('', [Validators.required]);

  formLogin = new FormGroup({
    email: this.email,
    senha: this.senha
  }, { updateOn: 'blur' })

  fazerLogin() {
    if (this.formLogin.pristine || this.formLogin.invalid) {
      this.toastr.error('Preencha corretamente todos os campos', 'CMail');
      return;
    }

    this.servico
      .autenticar(this.formLogin.value)
      .subscribe(
        () => this.roteader.navigate(['inbox']),
        (responseError: HttpErrorResponse) => this.toastr.error(responseError.error.message, 'CMail')
      )
  }
}
