import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';


@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    ToastrModule.forRoot(),
    CaixaDeEntradaRoutingModule
  ],
  exports: [
    CaixaDeEntradaComponent
  ]
})
export class CaixaDeEntradaModule { }
