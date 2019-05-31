import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Email } from 'src/app/models/email';

import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from 'src/app/services/page-data.service';
import { HeaderDataService } from 'src/app/components/header/header-data.services';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html'
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private servico: EmailService,
    private pageService: PageDataService,
    private headerService: HeaderDataService
  ) {
    this.email = new Email();
    this.listaEmails = [];
  }

  ngOnInit() {
    this.pageService.atualizarTitulo('Inbox');
    this.servico
      .listar().subscribe(
        res => this.listaEmails = res,
        err => console.error(err)
      );

    this.headerService
      .valorDoFiltro
      .subscribe(novoValor => {
        this.termoParaFiltro = novoValor;
        this.filterEmails();
      });
  }

  title = 'cmail';
  termoParaFiltro: string = '';

  listaEmails: Email[] = [];
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

    this.servico.enviar(this.email)
      .subscribe(
        res => {
          this.listaEmails.push(res);
          this.email = new Email();

          formEmail.reset();

          this.toogleNewEmailForm();
          this.showSuccess('Você acabou de enviar um e-mail!');
        });
  }

  deleteEmail(evento: Event, codigo: string) {
    this.servico.apagar(codigo)
      .subscribe(
        () => {
          this.removerEmailLista(codigo);
          this.showInfo('E-mail excluído!');
        },
        err => console.error(err)
      )
  }

  removerEmailLista(codigo: string) {
    for (let index = 0; index < this.listaEmails.length; index++) {
      if (this.listaEmails[index].codigo === codigo) {
        this.listaEmails.splice(index, 1);
      }
    }
  }

  filterEmails() {
    return this.listaEmails.filter(item => item.assunto.includes(this.termoParaFiltro));
  }

  showSuccess(mensagem: string) {
    this.toastr.success(mensagem, 'CMail');
  }

  showFail() {
    this.toastr.error('Você sabe mesmo enviar e-mail?', 'CMail');
  }

  showInfo(mensagem: string) {
    this.toastr.info(mensagem, 'CMail');
  }
}
