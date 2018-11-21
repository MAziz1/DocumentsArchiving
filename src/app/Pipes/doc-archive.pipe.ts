import { Pipe, PipeTransform } from '@angular/core';
import { DocumentViewModel } from '../Entities/DocumentViewModel';

@Pipe({
  name: 'docArchive'
})
export class DocArchivePipe implements PipeTransform {

  transform(value: DocumentViewModel[], docType?: string, Subject?: string): any {
    

    if (value != undefined && value.length > 0) {
      if (docType != undefined && docType != "")
        value = value.filter(x => x.DocumentType == docType);
      if(Subject != undefined && Subject != "")
        value = value.filter(x => x.Subject.toLowerCase().indexOf(Subject.toLowerCase()) > -1);      

        return value.map(t=>{
          return{
            item:t,
            parent:value
          }
        })
    }
  }
}
