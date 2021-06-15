import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): unknown {
    if(!value) return null;
    const prepositions = ['of','the','in'];
    let words = value
      .split(' ')
      .map((word, i) => {
        if(!prepositions.includes(word.toLowerCase()) || i === 0){
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        console.log(word)
        return word.toLowerCase();
      })
      .join(' ');
    return words;
  }

}
