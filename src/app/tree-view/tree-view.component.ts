import { Component, OnInit } from '@angular/core';
import { EnterpriseDatasource } from '../model/EnterpriseDatasource'
import "ag-grid-enterprise";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  // private rowData;
  private rowModelType;
  private cacheBlockSize;
  // private getDataPath;
  private rowGroupPanelShow;
  private autoGroupColumnDef;
  private groupDefaultExpanded;
  private icons;

  constructor() { 
    this.columnDefs = [{ field: "orgHierarchy", rowGroup: true },{ field: "jobTitle" }, { field: "employmentType" }];
    this.groupDefaultExpanded = -1;

    this.autoGroupColumnDef = {
      headerName: "Hierarchy",
      field: 'orgHierarchy',
      width: 300,
      cellRendererParams: {
          suppressCount: true
      }
    }

    this.defaultColDef = {
      width: 100,
      suppressFilter: true
    };

    this.rowModelType = "enterprise";
    this.cacheBlockSize = 50;
    this.rowGroupPanelShow = "never";
    this.icons = {
      groupLoading:
        '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/javascript-grid-enterprise-model/spinner.gif" style="width:22px;height:22px;">'
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    var datasource = new EnterpriseDatasource();
    params.api.setEnterpriseDatasource(datasource);
  }

  ngOnInit() {
  }

}
