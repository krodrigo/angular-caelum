import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HeaderDataService {
    constructor() {
        this.atualizarTermoDeFiltro('');
    }
    
    valorDoFiltro = new Subject<string>();

    atualizarTermoDeFiltro(novoValor: string) {
        this.valorDoFiltro.next(novoValor);
    }
}