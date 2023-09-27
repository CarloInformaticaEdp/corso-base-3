import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appJoinPipe' })
export class AppJoinPipe implements PipeTransform {
  transform(value: any, separator?: string): string {
    return value.join(separator || '-');
  }
}
