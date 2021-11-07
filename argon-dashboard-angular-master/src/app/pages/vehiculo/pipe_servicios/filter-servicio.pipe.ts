import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterServicio'
})
export class FilterServicioPipe implements PipeTransform {

  public val1: Boolean
  transform(value: any, arg: any): any {
    const resultVehiculo = [];

    for( const vehiculo of value ){
      val1: false;
      if((vehiculo.modelo.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (vehiculo.marca.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (vehiculo.color.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (vehiculo.placas.toLowerCase().indexOf(arg.toLowerCase()) > -1) ){
        console.log("Marca");
        resultVehiculo.push(vehiculo);
        val1: true;
      };
    };
    return resultVehiculo;
  }

}
