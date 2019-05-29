import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[cmailFormField]'
})
export class FormFieldDirective implements OnInit {
    constructor(private elemento: ElementRef) { }

    ngOnInit() {
        const campo: HTMLInputElement = this.elemento.nativeElement;

        console.log(this.elemento.nativeElement);

        if (!campo.name) {
            throw new Error('Para usar a diretiva cmailFormField o atributo name deve ser definido');
        }

        campo.id = campo.name;
        campo.classList.add('mdl-textfield__input');
        campo.setAttribute('placeholder', ' ');
    }
}