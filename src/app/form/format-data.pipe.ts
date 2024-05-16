import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData',
  standalone: true
})
export class FormatDataPipe implements PipeTransform {

  transform(value: any): string {
    const formattedData = {"name":null,"lastname":null,age:'1'};
    Object.assign(formattedData, value);
    formattedData.age = value?.age ? value.age + ' years old' : 'null';

    return JSON.stringify(formattedData);
  }

}
