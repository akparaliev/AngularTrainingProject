import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'orderby'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, field: string, order: boolean): any {
    if (!value || !field) { return; }
    if (!order) {order = false; }

    return value.sort((first, second) => {
      return order ? (first[field] > second[field] ? 1 : first[field] < second[field] ? -1 : 0) :
                     (first[field] < second[field] ? 1 : first[field] > second[field] ? -1 : 0);
    });
  }

}
