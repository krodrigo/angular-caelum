import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { HeaderModule } from 'src/app/components/header/header.module';
import { FormGroupModule } from 'src/app/components/form-group/form-group.module';

import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { PageDataService } from 'src/app/services/page-data.service';

@NgModule({
  declarations: [
    CadastroComponent
    ],
  imports: [
    CommonModule,
    HeaderModule,
    ToastrModule.forRoot(),
    FormsModule,
    FormGroupModule,
    ReactiveFormsModule,
    HttpClientModule,
    CadastroRoutingModule
  ],
  providers: [
    PageDataService
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
