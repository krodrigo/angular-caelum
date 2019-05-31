import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PageDataService {

    titulo = new Subject<string>();

    atualizarTitulo(novoTitulo: string) {
        document.title = `CMail ${novoTitulo}`.trim();
        this.titulo.next(novoTitulo);
    }
}