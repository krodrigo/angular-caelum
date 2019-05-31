import { Component } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})

export class HeaderComponent {

    constructor(private pageService: PageDataService) {
        this.pageService.titulo
            .subscribe(novoTitulo => this.tituloDaPagina = `CMail - ${novoTitulo}`);
    }

    tituloDaPagina: string = 'CMail';
    isMenuOpen: boolean = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    filtrarEmails(filtro: string) {
        console.log(filtro);
    }
}
