import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentType } from '../Entities/DocumentType';
import { Document } from '../Entities/Document';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DocumentViewModel } from '../Entities/DocumentViewModel';
import { stringify } from '@angular/core/src/util';
import { DocumentContent } from '../Entities/DocumentContent';

@Injectable({
  providedIn: 'root'
})
export class ArchivingService {

  WebAPI:string = "http://localhost/DocumentArchivingAPI/API/Archiving/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  undefined,
    })
  };


  constructor(private _http: HttpClient) { 
  }

  GetDocumentTypes():Observable<DocumentType[]> {
    return this._http.get<DocumentType[]>(this.WebAPI + "GetAllDocumentTypes");
  }


  AddNewDocument(doc:Document):Observable<Document>{
    const formData: FormData = new FormData();
    formData.append('Content', doc.Content, doc.Content.name);
    formData.append('Doc_Subject', doc.Doc_Subject);
    formData.append('DocType_ID', doc.DocType_ID.toString());
    formData.append('Doc_SrialNumber', doc.Doc_SrialNumber.toString());
    formData.append('Doc_Date', doc.Doc_Date.toString());
    formData.append('Doc_Remarks', doc.Doc_Remarks.toString());
    //var jsonDoc = JSON.stringify(formData);    
    return this._http.post<Document>(this.WebAPI + "PostDocument", formData);
  }

  GetAllDocuments():Observable<DocumentViewModel[]>{

    return this._http.get<DocumentViewModel[]>(this.WebAPI + "GetDocumentsList");
  }


  DownloadDocumentContent(id:string):Observable<DocumentContent>{
    const formData:FormData = new FormData();
    formData.append('DocumentID', id);
    return this._http.post<DocumentContent>(this.WebAPI + "GetDocumentContent", formData);
  }
}
