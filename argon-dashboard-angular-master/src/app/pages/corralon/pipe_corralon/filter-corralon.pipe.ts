import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCorralon'
})
export class FilterCorralonPipe implements PipeTransform {

  public val1: Boolean
  transform(value: any, arg: any): any {
    const resultVehiculo = [];

    for( const corralon of value ){
      val1: false;
      if( (corralon.pension_c.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (corralon.status_entrega.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (corralon.otro_asunto.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (corralon.fecha_entrada.toLowerCase().indexOf(arg.toLowerCase()) > -1) ){
        console.log("Marca");
        resultVehiculo.push(corralon);
        val1: true;
      };
    };
    return resultVehiculo;
  }

}
