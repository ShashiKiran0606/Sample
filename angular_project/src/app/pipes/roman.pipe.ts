import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(value: number) {
    const obj: Record<number, string> ={1000:'M', 900:'CM', 500:'D', 400:'CD', 100:'C', 90:'XC', 50:'L', 40:'XL', 10:'X', 9:'IX', 5:'V', 4:'IV', 1:'I'}
   let output='';
   let keys = Object.keys(obj).map(Number).sort((a, b) => b - a);
   for(let i of keys)
   {
       let n=Math.floor(value/i);
       if(n>0)
       {
           output+=obj[i].repeat(n);
           value-=n*i;
       }
   }
   return output;
  }

}
