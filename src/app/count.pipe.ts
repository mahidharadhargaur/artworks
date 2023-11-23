import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    const suffixes = ['', 'k', 'M', 'B', 'T']; // Add more suffixes as needed

    let suffixIndex = 0;

    while (value >= 1000 && suffixIndex < suffixes.length - 1) {
      value /= 1000;
      suffixIndex++;
    }

    // Use toFixed to round the number to a fixed number of decimal places
    return value.toFixed(1).replace(/\.0$/, '') + suffixes[suffixIndex];
  }
}
