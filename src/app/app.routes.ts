import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const rotas: Routes = [
    { path: '', loadChildren: 'src/app/modules/login/login.module#LoginModule' },
    { path: 'login', loadChildren: 'src/app/modules/login/login.module#LoginModule' },
    { path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule' },
    { path: 'inbox', loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule' },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class ModuloRoteamento {}