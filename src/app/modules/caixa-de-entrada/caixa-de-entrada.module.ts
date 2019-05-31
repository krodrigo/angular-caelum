import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';

import { HeaderModule } from 'src/app/components/header/header.module';
import { ListItemModule } from './list-item/list-item.module';
import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from 'src/app/services/page-data.service';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HeaderModule,
    ListItemModule,
    ToastrModule.forRoot(),
    CaixaDeEntradaRoutingModule
  ],
  exports: [
    CaixaDeEntradaComponent
  ],
  providers: [
    EmailService,
    PageDataService
  ]
})
export class CaixaDeEntradaModule { }
