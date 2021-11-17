import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChofer'
})
export class FilterChoferPipe implements PipeTransform {

  public val1: Boolean
  transform(value: any, arg: any): any {
    const resultVehiculo = [];

    for( const chofer of value ){
      val1: false;
      if((chofer.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (chofer.apellido_p.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (chofer.apellido_m.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (chofer.sucursal.toLowerCase().indexOf(arg.toLowerCase()) > -1)){
        console.log("Marca");
        resultVehiculo.push(chofer);
        val1: true;
      };
    };
    return resultVehiculo;
  }

}
