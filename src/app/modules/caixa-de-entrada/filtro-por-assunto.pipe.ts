import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorAssunto'
})
export class FiltroPorAssuntoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
