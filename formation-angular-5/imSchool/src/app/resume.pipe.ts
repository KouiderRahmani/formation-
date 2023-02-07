import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: unknown, limite?: number): unknown {

    if (!value) {
      return null;
    }
    if (typeof value === 'string') {
      return  limite? value.substring(1, limite) :value.substring(1, 30)  + '.....'  ;
    }
    return  value;
  }
  
}

