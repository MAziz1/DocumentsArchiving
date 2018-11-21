import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DocumentType} from '../../Entities/DocumentType';
import { ArchivingService } from 'src/app/Shared/archiving-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  docTypes: DocumentType[];
  
  constructor(private _http: HttpClient, private ArchivingService: ArchivingService) { }

  ngOnInit() {
    this.ArchivingService.GetDocumentTypes().subscribe(x => { this.docTypes = x });
  }

}
