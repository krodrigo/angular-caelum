import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CaixaDeEntradaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule
  ],
  exports: [
    CaixaDeEntradaComponent
  ]
})
export class CaixaDeEntradaModule { }
