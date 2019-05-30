import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

const rotas: Routes = [
    { path: '', loadChildren: 'src/app/modules/login/login.module#LoginModule' },
    { path: 'login', loadChildren: 'src/app/modules/login/login.module#LoginModule' },
    { 
        path: 'cadastro', 
        loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'
    },
    { 
        path: 'inbox',
        loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule',
        canActivate: [AuthGuard]
     },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})
export class ModuloRoteamento {}