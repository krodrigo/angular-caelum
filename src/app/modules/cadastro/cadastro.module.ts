import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { HeaderModule } from 'src/app/components/header/header.module';
import { FormGroupModule } from 'src/app/components/form-group/form-group.module';

import { CadastroComponent } from './cadastro.component';


@NgModule({
  declarations: [
    CadastroComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    FormGroupModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
