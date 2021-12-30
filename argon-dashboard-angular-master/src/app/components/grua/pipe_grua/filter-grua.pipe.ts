import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGrua'
})
export class FilterGruaPipe implements PipeTransform {

  public val1: Boolean
  transform(value: any, arg: any): any {
    const resultVehiculo = [];

    for( const grua of value ){
      val1: false;
      if( (grua.modelo.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (grua.marca.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (grua.placas.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (grua.sucursal.toLowerCase().indexOf(arg.toLowerCase()) > -1)){
        console.log("Marca");
        resultVehiculo.push(grua);
        val1: true;
      };
    };
    return resultVehiculo;
  }

}
