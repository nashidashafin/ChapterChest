import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(DataArray:any[],searchString:string): any {
    const result:any=[]
    if(!DataArray || !searchString){
      return DataArray
    }
    else{
      DataArray.forEach((item:any)=>{
        if((item.title + item.author + item.genere).trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }

}
