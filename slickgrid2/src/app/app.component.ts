import { Component } from '@angular/core';
import { Aggregators, Grouping, GroupingGetterFunction, Editors, Filters, Formatters, GridOption, Column, FieldType, Formatter, AngularGridInstance, AutoCompleteEditor, GroupTotalFormatters, FileType } from 'angular-slickgrid';
import { ExcelExportService } from '@slickgrid-universal/excel-export';
import { TextExportService } from '@slickgrid-universal/text-export';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 
  constructor(private excelExportService: ExcelExportService, private exportService: TextExportService, private translate: TranslateService) {
    
    translate.setDefaultLang('tn');
  }
  title = 'slickgridtest';

  columnDefinitions = [
    { id: 'id', name: 'ID', field: 'id', sortable: true, minWidth: 300, filterable:true,
      grouping: {
        getter: 'id',
        formatter: (g: { value: any; count: any; }) => `Id: ${g.value}  <span class="text-primary">(${g.count} items)</span>`,
        // aggregators: [
        //   new Aggregators.Sum('cost')
        // ],
        aggregateCollapsed: false,
        collapsed: false
      }
     },
    { id: 'title', name: 'Title', field: 'title', sortable: true, minWidth: 300,filterable:true,
      grouping: {
        getter: 'title',
        formatter: (g: { value: any; count: any; }) => `Title: ${g.value}  <span class="text-primary">(${g.count} items)</span>`,
        // aggregators: [
        //   new Aggregators.Sum('cost')
        // ],
        aggregateCollapsed: false,
        collapsed: false
      }
     },
    { id: 'duration', name: 'Duration', field: 'duration', sortable: true, minWidth: 300,
      grouping: {
        getter: 'duration',
        formatter: (g: { value: any; count: any; }) => `Duration: ${g.value}  <span class="text-primary">(${g.count} items)</span>`,
        // aggregators: [
        //   new Aggregators.Sum('cost')
        // ],
        aggregateCollapsed: false,
        collapsed: false
      }
     },
    { id: 'website', name: 'Website', field: 'website', formatter: Formatters.hyperlink, minWidth: 300 },
    { id: 'icon', name: 'Icon', field: 'icon', formatter: Formatters.icon, minWidth: 300, params: { formatterIcon: 'fa fa-star' } },
    {
      id: 'duration', name: 'Duration', field: 'duration', minWidth: 300,
      type: FieldType.number,
      groupTotalsFormatter: GroupTotalFormatters.sumTotals,
      params: { groupFormatterPrefix: 'Total: ' }
    },
    // {
    //   id: 'cost', name: 'Cost', field: 'cost',
    //   exportWithFormatter: true,    // for a Dollar Formatter, we also want it to be displayed in the export to file
    //   formatter: Formatters.dollar,
    //   groupTotalsFormatter: GroupTotalFormatters.sumTotalsDollar,
    //   params: { groupFormatterPrefix: '<b>Total</b>: ', groupFormatterSuffix: ' USD' }
    // }
    {
      id: 'cost', name: 'Cost', field: 'cost', minWidth: 300,
      groupTotalsFormatter: this.sumTotalsFormatter
    },
   
    {
      id: 'price', name: 'Price', field: 'price', minWidth: 300, formatter: Formatters.dollar
     
    },
    {
      id: 'number', name: 'Number', field: 'number', minWidth: 300, formatter: Formatters.mask, params: {mask: '(000) 000-000'}
    },
    {
      id: 'date', name: 'Date', field: 'date', minWidth: 300, formatter: Formatters.dateEuro
    }


  ];
  angularGrid1: any;
  
  sumTotalsFormatter(totals: { sum: { [x: string]: any; }; }, columnDef: { field: string | number; }) {
    const val = totals.sum && totals.sum[columnDef.field];
    if (val != null) {
      return 'total: ' + ((Math.round(parseFloat(val) * 100) / 100));
    }
    return '';
  }

  gridOptions = {
    headerMenu : { hideFreezeColumnsCommand: false, hideColumnHideCommand: false, hideSortCommands: false, },
    frozenColumn: -1,
    frozenRow: -1,
    enableFilter: true,
    enableHeaderMenu:true,
    enableAutoResize: true,
    enableCellNavigation: true,
    enableSorting: true,
    gridWidth:1250, // Control the grid width 
    gridHeight:500, // Control the grid height 

    // exportOptions: {
    //   sanitizeDataExport: true   // you can also sanitize the exported data (it will remove any HTML tags)
    // },

     // we'll use top-header for the Draggable Grouping
     enableDraggableGrouping: true,
  createTopHeaderPanel: true,
  showTopHeaderPanel: true,
  topHeaderPanelHeight: 50,

  // Export Excel Start //
  enableExcelExport: true,
      excelExportOptions: {
        sanitizeDataExport: true
      },
      registerExternalResources: [this.excelExportService, this.exportService],
      enableTextExport: true,
      exportOptions: {
        sanitizeDataExport: true
      },

  // Export Excel End //

      // Grouping Start //

  enableGrouping: true,        // don't forget to enable the grouping

  draggableGrouping: {
    dropPlaceHolderText: 'Drop a column header here to group by any of these available columns: Currency, Market or Type',
    deleteIconCssClass: 'mdi mdi-close',
  },
  createPreHeaderPanel: true,
  showPreHeaderPanel: true,
  preHeaderPanelHeight: 50,
  enableFiltering: true,
  cellHighlightCssClass: 'changed',

      // Grouping End //

  };

  


  dataset =  [
    { id: 1, title: 'Task 1', duration: 20, website:'https://www.example.com', cost:'10' ,price:'20' , number:'123456789',date:new Date() },
    { id: 2, title: 'Task 2', duration: 10 , website:'https://www.google.com', cost:'10' ,price:'20' , number:'123456789' },
    { id: 3, title: 'Task 3', duration: 15, website:'https://www.example.com', cost:'10' ,price:'20' , number:'123456789' },
    { id: 4, title: 'Task 3', duration: 15, website:'https://www.example.com', cost:'10' ,price:'20' , number:'123456789' },
  ];;

  exportToExcel() {
    this.excelExportService.exportToExcel({ filename: `EmployeeDetails${new Date().toDateString()}`, format: FileType.xlsx });
  }

  exportToCSV() {
    this.exportService.exportToFile({ filename: 'export', format: FileType.csv });
  }


  angularGridReady(angularGrid:any) {
    this.angularGrid1 = angularGrid.detail;
    console.log(this.angularGrid1.filterService.getCurrentLocalFilters())
    console.log(this.angularGrid1.filterService.updateFilters([]))

  }

  setFrozenColumns(frozenCols: number) {
    this.angularGrid1.slickGrid.setOptions({ frozenColumn: frozenCols });
    this.angularGrid1.slickGrid.setOptions({ frozenRow: frozenCols });
    this.gridOptions = this.angularGrid1.slickGrid.getOptions();
  }


  // Transulation code //

switchLanguage(language: string) {
  this.translate.use(language).subscribe(() => {
    this.translate.get('GRID').subscribe((res: any) => {
 this.columnDefinitions = [
    { id: 'id', name: 'ID', field: 'id', sortable: true, minWidth: 300, filterable:true,
      grouping: {
        getter: 'id',
        formatter: (g: { value: any; count: any; }) => `Id: ${g.value}  <span class="text-primary">(${g.count} items)</span>`,
        // aggregators: [
        //   new Aggregators.Sum('cost')
        // ],
        aggregateCollapsed: false,
        collapsed: false
      }
     },
    { id: 'title', name:res.Title, field: 'title', sortable: true, minWidth: 300,filterable:true,
      grouping: {
        getter: 'title',
        formatter: (g: { value: any; count: any; }) => `Title: ${g.value}  <span class="text-primary">(${g.count} items)</span>`,
        // aggregators: [
        //   new Aggregators.Sum('cost')
        // ],
        aggregateCollapsed: false,
        collapsed: false
      }
     },
    { id: 'duration', name:res.Duration, field: 'duration', sortable: true, minWidth: 300,
      grouping: {
        getter: 'duration',
        formatter: (g: { value: any; count: any; }) => `Duration: ${g.value}  <span class="text-primary">(${g.count} items)</span>`,
        // aggregators: [
        //   new Aggregators.Sum('cost')
        // ],
        aggregateCollapsed: false,
        collapsed: false
      }
     },
    { id: 'website', name: 'Website', field: 'website', formatter: Formatters.hyperlink, minWidth: 300 },
    { id: 'icon', name: 'Icon', field: 'icon', formatter: Formatters.icon, minWidth: 300, params: { formatterIcon: 'fa fa-star' } },
    {
      id: 'duration', name: 'Duration', field: 'duration', minWidth: 300,
      type: FieldType.number,
      groupTotalsFormatter: GroupTotalFormatters.sumTotals,
      params: { groupFormatterPrefix: 'Total: ' }
    },
    // {
    //   id: 'cost', name: 'Cost', field: 'cost',
    //   exportWithFormatter: true,    // for a Dollar Formatter, we also want it to be displayed in the export to file
    //   formatter: Formatters.dollar,
    //   groupTotalsFormatter: GroupTotalFormatters.sumTotalsDollar,
    //   params: { groupFormatterPrefix: '<b>Total</b>: ', groupFormatterSuffix: ' USD' }
    // }
    {
      id: 'cost', name: 'Cost', field: 'cost', minWidth: 300,
      groupTotalsFormatter: this.sumTotalsFormatter
    },
   
    {
      id: 'price', name: 'Price', field: 'price', minWidth: 300, formatter: Formatters.dollar
     
    },
    {
      id: 'number', name: 'Number', field: 'number', minWidth: 300, formatter: Formatters.mask, params: {mask: '(000) 000-000'}
    },
    {
      id: 'date', name: 'Date', field: 'date', minWidth: 300, formatter: Formatters.dateEuro
    }


  ];
    });
  });
}


// Transulation code //


}
