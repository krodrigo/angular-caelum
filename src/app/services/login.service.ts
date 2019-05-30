import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Login } from '../models/dto/login';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    autenticar({ email, senha }: { email: string, senha: string }) {
        const dados = new Login({ email, senha });

        return this.http
            .post(`${environment.cmailApi}login`, dados)
            .pipe(
                map((response: any) => {
                    localStorage.setItem('cmail-token', response.token);
                    return response;
                })
            )
    }

    logoff() {
        localStorage.removeItem('cmail-token');
    }
}