import { HttpClient } from '@angular/common/http';
import { UsuarioDto } from '../models/dto/usuarioDto';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export class CadastroService {
    constructor(private http: HttpClient) { }

    autenticar({ nome, username, senha, telefone, avatar }: { nome: string, username: string, senha: string, telefone: string, avatar: string }) {
        const dados = new UsuarioDto({ nome, username, senha, telefone, avatar });

        return this.http
            .post(`${environment.cmailApi}login`, dados)
            .pipe(
                map((response: any) => {
                    localStorage.setItem('cmail-token', response.token);
                    return response;
                })
            )
    }
}