import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input('dados-email') dadosEmail: Email;
  @Output() apagarEmailEvent = new EventEmitter()

  apagarEmail(email: Email) {
    if (!confirm(`Quer apagar o e-mail [${email.assunto}]?`)) return;

    this.apagarEmailEvent.emit({codigo: email.codigo});
  }
}
