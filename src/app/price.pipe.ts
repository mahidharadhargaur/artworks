import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    return `$ ${parseFloat(value.toFixed(2))}`;
  }
}
