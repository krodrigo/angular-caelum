import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro.component';

import { HeaderModule } from 'src/app/components/header/header.module';
import { FormGroupModule } from 'src/app/components/form-group/form-group.module';

@NgModule({
  declarations: [
    CadastroComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    RouterModule,
    FormGroupModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
