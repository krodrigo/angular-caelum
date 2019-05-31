import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';

import { HeaderModule } from 'src/app/components/header/header.module';
import { EmailService } from 'src/app/services/email.service';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HeaderModule,
    ToastrModule.forRoot(),
    CaixaDeEntradaRoutingModule
  ],
  exports: [
    CaixaDeEntradaComponent
  ],
  providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule { }
