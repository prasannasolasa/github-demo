import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

   transform(users: any[], field: string): any[] {
    console.log("string: "+field)
    if(field){
      console.log("if")
      users.sort((a,b)=>a[field]>b[field]?1:-1);
      
    }
    else{
      console.log("else")
      users.sort((a,b)=>a>b ? 1 :-1);
     
    } 
    return users;
  }
 
}
