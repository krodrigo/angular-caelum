import { Routes, RouterModule } from '@angular/router';

import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';

const rotas: Routes = [
    { path: '', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'inbox', component: CaixaDeEntradaComponent },
    { path: '**', redirectTo: '' }
]

export const ModuloRoteamento = RouterModule.forRoot(rotas);