import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSucursal'
})
export class FilterSucursalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
