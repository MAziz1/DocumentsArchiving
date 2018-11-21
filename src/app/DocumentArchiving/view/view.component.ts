import { Component, OnInit, Input } from '@angular/core';
import { ArchivingService } from '../../Shared/archiving-service.service';
import { DocumentViewModel } from '../../Entities/DocumentViewModel';
import * as fileSaver from 'file-saver';
import { DocumentContent } from 'src/app/Entities/DocumentContent';
import { DocumentType } from 'src/app/Entities/DocumentType';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  documentList: DocumentViewModel[];
  docContent: DocumentContent;
  docTypes:DocumentType[];
  SelectedDocTypeID:string;
  Show:boolean = false;
  DocumentsLoaded:boolean = false;
  constructor(private archServ: ArchivingService) {

  }
  ngOnInit() {
    this.archServ.GetAllDocuments().subscribe(x => { 
      this.DocumentsLoaded = true;
      this.documentList = x 
    });

    this.archServ.GetDocumentTypes().subscribe(x => {
      this.Show = true;
      this.docTypes = x });

  }

  downloadFile(id: string) {
    this.archServ.DownloadDocumentContent(id).subscribe(cont => {      
      this.docContent = cont;
      let contentType = this.docContent.Type;
      let byteCharacters = atob(cont.ContentString);

      let byteNumbers = new Array(byteCharacters.length);
      for (var i = 0; i < byteCharacters.length; i++)
        byteNumbers[i] = byteCharacters.charCodeAt(i);

      let bytes = new Uint8Array(byteNumbers);
      let file = new Blob([bytes], { type: contentType });
      fileSaver.saveAs(file, this.docContent.Name);
    });
  } 
}
