import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './DocumentArchiving/add/add.component';

import { FormsModule, FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'
import {HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { ViewComponent } from "./DocumentArchiving/view/view.Component";
import  {RouterModule} from '@angular/router'
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchComponent } from './DocumentArchiving/search/search.component';
import { DocArchivePipe } from './Pipes/doc-archive.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    SearchComponent,
    DocArchivePipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: "", component: ViewComponent },
        { path: "view", component: ViewComponent },
        { path: "add", component: AddComponent }
      ]
      ),
    AgGridModule.withComponents([]),
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates:true,
      closeButton:true
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
