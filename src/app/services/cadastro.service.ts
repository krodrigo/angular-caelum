import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { UsuarioDto } from '../models/dto/usuarioDto';

export class CadastroService {
    constructor(private http: HttpClient) { }

    autenticar({ nome, username, senha, telefone, avatar }:
        { nome: string, username: string, senha: string, telefone: string, avatar: string }) {
        const dados = new UsuarioDto({ nome, username, senha, telefone, avatar });

        return this.http
            .post(`${environment.cmailApi}users`, dados)
            .pipe(
                map((response: any) => {
                    return response;
                })
            )
    }
}