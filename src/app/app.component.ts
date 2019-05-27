import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmail';
  private _isNewEmailFormOpen:boolean = false;

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toogleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }
}
