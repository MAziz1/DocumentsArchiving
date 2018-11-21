import { Component, OnInit } from '@angular/core';
import { Document } from '../../Entities/document';
import { ArchivingService } from '../../Shared/archiving-service.service';
import { DocumentType } from '../../Entities/DocumentType';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'Archive-Document',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  doc:Document = new Document();
  docTypes: DocumentType[];
  AddForm: FormGroup;
  Subject:FormControl;
  DocType:FormControl;
  SerialNumber:FormControl;
  Content:FormControl;
  Remarks:FormControl;
  DocDate:FormControl;
  constructor(private ArchivingService: ArchivingService, private toastr: ToastrService) {
    this.ArchivingService.GetDocumentTypes().subscribe(x => { this.docTypes = x });
  }

  ngOnInit() {
    this.CreateFormControl();
    this.CreateForm();
  }

  CreateFormControl(){
    this.Subject = new FormControl();
    this.DocType = new FormControl();
    this.SerialNumber = new FormControl();
    this.Content = new FormControl();
    this.Remarks = new FormControl();
    this.DocDate = new FormControl();
  }

  CreateForm(){
    this.AddForm = new FormGroup({
      Subject: this.Subject,
      DocType: this.DocType,
      SerialNumber: this.SerialNumber,
      Content: this.Content,
      Remarks: this.Remarks,
      DocDate: this.DocDate
    });
  }

  ///A Function used to add new document.
  AddNewDocument(doc,sender)
  {
    //#region Check On Mandatory Fields
    if(this.Subject.value == null)
    {
      this.toastr.warning("Please Fill Subject", "Document Archiving");
      return;
    }
    else if(this.DocType.value  == null){
      this.toastr.warning("Please Select Document Type", "Document Archiving");
      return;
    }
    //#endregion    
    
    this.doc.Doc_Subject = this.Subject.value;
    this.doc.DocType_ID = this.DocType.value;
    this.doc.Doc_SrialNumber = this.SerialNumber.value;    
    this.doc.Doc_Date = this.DocDate.value;
    this.doc.Doc_Remarks = this.Remarks.value;

    this.ArchivingService.AddNewDocument(this.doc).subscribe(data=> {
      if(data)
      {        
        this.toastr.success("Document Added Successfully.", "Document Archiving")
        this.AddForm.reset();
      }
      else
        this.toastr.error("An Error Occured While Adding.", "Document Archiving")
    });
  }

  SetContent(fileLst:FileList)
  {
    this.doc.Content = fileLst.item(0);
  }

  ResetForm(){
    this.AddForm.reset();
  }

}
