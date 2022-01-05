import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSucursal'
})
export class FilterSucursalPipe implements PipeTransform {

  public val1: Boolean
  transform(value: any, arg: any): any {
    const resultSucursal = [];

    for( const sucursal of value ){
      val1: false;
      if( (sucursal.sucursal.toLowerCase().indexOf(arg.toLowerCase()) > -1)){
        resultSucursal.push(sucursal);
        val1: true;
      };
    };
    return resultSucursal;
  }

}