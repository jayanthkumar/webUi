import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TreeViewComponent } from './tree-view/tree-view.component';

import {AgGridModule} from 'ag-grid-angular/main';


@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
