import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Email } from '../models/email';
import { EmailPost } from '../models/dto/email-post';
import { EmailGet } from '../models/dto/email-get';

@Injectable()
export class EmailService {
    constructor(private http: HttpClient) { }

    enviar(email: Email): Observable<Email> {

        const emailpost = new EmailPost(email);
        const options = {
            headers: new HttpHeaders(
                {
                    'Authorization': localStorage.getItem('cmail-token')
                })
        };

        return this.http
            .post<EmailPost>(`${environment.cmailApi}emails`, emailpost, options)
            .pipe<Email>(
                map(resp => {
                    return new EmailGet(resp);
                })
            )
    }

    listar(): Observable<Email[]> {
        const options = {
            headers: new HttpHeaders(
                {
                    'Authorization': localStorage.getItem('cmail-token')
                })
        };

        let emails: Email[] = [];

        return this.http
            .get<EmailPost[]>(`${environment.cmailApi}emails`, options)
            .pipe(
                map(
                    (emailList) => {
                        return emailList.map((email) => {
                            return new EmailGet(email)
                        })
                    }
                )
            )
    }

    apagar(codigo: string) {
        const options = {
            headers: new HttpHeaders(
                {
                    'Authorization': localStorage.getItem('cmail-token')
                })
        };

        return this.http
        .delete(`${environment.cmailApi}emails/${codigo}`, options)
        .pipe(
            map(resp => console.log(resp)
            )
        )
    }
}
