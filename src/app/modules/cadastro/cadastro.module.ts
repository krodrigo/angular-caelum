import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { HeaderModule } from 'src/app/components/header/header.module';
import { FormGroupModule } from 'src/app/components/form-group/form-group.module';

import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';

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
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
