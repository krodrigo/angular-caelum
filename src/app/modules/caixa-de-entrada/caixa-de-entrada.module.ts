import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule
  ],
  exports: [
    CaixaDeEntradaComponent
  ]
})
export class CaixaDeEntradaModule { }
