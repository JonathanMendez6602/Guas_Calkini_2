import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAseguradora'
})
export class FilterAseguradoraPipe implements PipeTransform {

  public val1: Boolean
  transform(value: any, arg: any): any {
    const resultAseguradora = [];

    for( const aseguradora of value ){
      val1: false;
      if( (aseguradora.nombre_aseguradora.toLowerCase().indexOf(arg.toLowerCase()) > -1)){
        resultAseguradora.push(aseguradora);
        val1: true;
      };
    };
    return resultAseguradora;
  }

}