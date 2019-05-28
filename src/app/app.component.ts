import { Component } from '@angular/core';
import { Email } from './models/email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
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

  sendEmail(eventoSubmit: Event) {
    eventoSubmit.preventDefault();
    this.listaEmails.push(this.email);
    this.email = new Email();
    eventoSubmit.target.reset();
  }
}
