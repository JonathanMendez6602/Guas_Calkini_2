import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCatalogo'
})
export class FilterCatalogoPipe implements PipeTransform {
  public val1: Boolean
  transform(value: any, arg: any): any {
    const resultCatalogo = [];

    for( const catalogo of value ){
      val1: false;
      if( (catalogo.tipoVehiculo.toLowerCase().indexOf(arg.toLowerCase()) > -1)){
        resultCatalogo.push(catalogo);
        val1: true;
      };
    };
    return resultCatalogo;
  }

}