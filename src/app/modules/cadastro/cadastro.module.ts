import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
