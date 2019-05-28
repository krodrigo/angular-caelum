import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent {


  constructor(private toastr: ToastrService) {
    this.email = new Email();
    this.listaEmails = [];
  }

  title = 'cmail';
  listaEmails: Email[];
  email: Email = new Email();

  private _isNewEmailFormOpen: boolean = false;

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toogleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  sendEmail(formEmail: NgForm) {
    for (const control in formEmail.controls) {
      formEmail.controls[control].markAsTouched();
    }

    if (formEmail.invalid) {
      this.showFail();
      return;
    }

    this.listaEmails.push(this.email);
    this.email = new Email();

    formEmail.reset();

    this.toogleNewEmailForm();

    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Você acabou de enviar um e-mail!', 'CMail');
  }

  showFail() {
    this.toastr.error('Você sabe mesmo enviar e-mail?', 'CMail');
  }
}