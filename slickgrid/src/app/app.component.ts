import { Component } from '@angular/core';
import { Editors, Filters, Formatters, GridOption, Column, FieldType, Formatter, AngularGridInstance, AutoCompleteEditor } from 'angular-slickgrid';
import { filter } from 'rxjs';




const buttonFormatter: Formatter<any> = (row: number, cell: number, value: any, columnDef: any, dataContext: any) => {
  console.log('DataContext:', dataContext); 
  const buttonStyle = dataContext.duration >= 5 ? 'color: white; background-color: red;' : '';
  return `<button style="${buttonStyle}">hello</button>`;
}


const customEnableButtonFormatter: Formatter = (_row: number, _cell: number, value: any) => {
  return `<span style="margin-left: 5px">
      <button class="btn btn-xs btn-default btn-icon">
        <i class="mdi ${value ? 'mdi-check-circle' : 'mdi-circle'}" style="color: ${value ? 'black' : 'lavender'}"></i>
      </button>
    </span>`;
};


const currencyFormatter: Formatter = (cell: number, row: number, value: string) =>
  `<img src="https://flags.fmcdn.net/data/flags/mini/${value.substr(0, 2).toLowerCase()}.png" width="20"/> ${value}`;


const historicSparklineFormatter: Formatter = (row: number, cell: number, value: string, col: Column, dataContext: any) => {
  const svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElem.setAttributeNS(null, 'width', '135');
  svgElem.setAttributeNS(null, 'height', '30');
  svgElem.setAttributeNS(null, 'stroke-width', '2');
  svgElem.classList.add('sparkline');
  sparkline(svgElem, dataContext.historic, { interactive: true });
  return svgElem.outerHTML;
};

const priorityExportFormatter: Formatter = (row, cell, value, columnDef, dataContext, grid) => {
  if (!value) {
    return '';
  }
  const gridOptions = grid.getOptions() as GridOption;
  const translate = gridOptions.i18n;
  const count = +(value >= 3 ? 3 : value);
  const key = count === 3 ? 'HIGH' : (count === 2 ? 'MEDIUM' : 'LOW');

  return translate && translate.instant && translate.instant(key);
};

const priorityFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  if (!value) {
    return '';
  }
  let output = '';
  const count = +(value >= 3 ? 3 : value);
  const color = count === 3 ? 'red' : (count === 2 ? 'orange' : 'yellow');
  const icon = `<i class="mdi mdi-star ${color}" aria-hidden="true"></i>`;

  for (let i = 1; i <= count; i++) {
    output += icon;
  }
  return output;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: ['.percent-complete-bar { height: 100%; }']

})

export class AppComponent {
  columnDefinitions: Column[];
  gridOptions: GridOption;
  dataset: any[];


  title = 'slickgridtest';

  angularGrid1!: AngularGridInstance;
  columnDefinitions1: Column[] = [];
  columnDefinitions2: Column[] = [];
  gridOptions1!: GridOption;
  gridOptions2!: GridOption;
  dataset1!: any[];
  dataset2!: any[];


  constructor() {

  this.columnDefinitions = [
    { id: 'id', name: 'ID', field: 'id', editor:{model:Editors.integer}, sortable: true, filterable:true, filter:{model:Filters.compoundInput} },
    { id: 'title', name: 'Title', field: 'title', editor:{model:Editors.text}, sortable: true, filterable:true, filter:{model:Filters.compoundInputText} },
    { id: 'isActive', name: 'Check box', field: 'isActive', formatter: Formatters.checkbox },
    { id: 'noActive', name: 'Check mark', field: 'noActive', formatter: Formatters.checkmark },
    { id: 'yesActive', name: 'Check mark material', field: 'yesActive', formatter: Formatters.checkmarkMaterial },
    { id: 'website', name: 'Website', field: 'website', formatter: Formatters.hyperlink },
    { id: 'icon', name: 'Icon', field: 'icon', formatter: Formatters.icon, params: { formatterIcon: 'fa fa-star' } },
    { id: 'align', name: 'Align-Center', field: 'align', formatter: Formatters.alignCenter }, 
    { id: 'center', name: 'Center', field: 'center', formatter: Formatters.center }, 
    { id: 'alig', name: 'Alig-Right', field: 'alig', formatter: Formatters.alignRight }, 
    { id: 'csvData', name: 'CSV Data', field: 'csvData', formatter: Formatters.arrayToCsv },
    { id: 'bold', name: 'Bold', field: 'bold', formatter: Formatters.bold },
    // Editor //
    { id: 'name', name: 'Name', field: 'name', editor: { model: Editors.text } },
  { id: 'age', name: 'Age', field: 'age', editor: { model: Editors.integer } },
  {
    id: 'fruit',
    name: 'Fruit',
    field: 'fruit',
    editor: {
      model: AutoCompleteEditor,
      placeholder: 'Select a fruit',
      collection: [
         { value: 'USA', label: 'United States of America' },
        { value: 'Canada', label: 'Canada' },
        { value: 'UK', label: 'United Kingdom' },
        { value: 'Germany', label: 'Germany' },
        { value: 'France', label: 'France' },
        { value: 'Japan', label: 'Japan' }
      ]
    }
  },  
    // Editor //
    { id: 'start', name: 'Start', field: 'start', formatter: Formatters.dateIso },
    { id: 'finish', name: 'Finish', field: 'finish', formatter: Formatters.dateIso },
    { id: 'duration', name: 'Duration', field: 'duration', editor:{model:Editors.text}, sortable: true, filterable:true, filter:{model:Filters.input} },
    { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', formatter: buttonFormatter, type: FieldType.number, sortable: true, minWidth: 100 },
    { id: 'completed', name: 'Completed', field: 'completed', type: FieldType.number, sortable: true, minWidth: 100, formatter: Formatters.percentCompleteBar },
    { id: 'percent2', name: '% Complete', field: 'percentComplete2', formatter: Formatters.percentCompleteBarWithText, type: FieldType.number, sortable: true, minWidth: 100 },
    {
      id: 'currency', name: 'Currency', field: 'currency', filterable: true, sortable: true, minWidth: 65, width: 65,
      formatter: currencyFormatter,
      filter: {
        model: Filters.singleSelect,
        collection: [{ label: '', value: '' }, { label: 'CAD', value: 'CAD' }, { label: 'USD', value: 'USD' }]
      },
    },
    
  
  ];

  this.gridOptions = {
    editable:true,
    enableAutoResize: true, 
    enableCellNavigation: true, // Double click the cell a box will be display , you can move any where
    enableColumnReorder: true,  // Reorder the table column using drage and drop
    autoEdit:true, // ask doubt
    enableAsyncPostRender: false, // ask doubt
    explicitInitialization: true, // ask doubt
    forceFitColumns: true, // ask doubt
    fullWidthRows: true, // ask doubt
    rowHeight: 50, // Row height 
    headerRowHeight:50, // Adjust the search bar height
    multiColumnSort: true,  //  Go to column head and press shift key to multi sort
    // multiSelect: true,  // ask doubt
    enableSorting: true,  // Remove filter , Remove sort , Hide column will be show
    enableFiltering:true,
    enablePagination: true, // Create pagination
      pagination:{          // Custom our pagination page sizes
        pageSizes:[5,10,15,20],
        pageSize:5
      }, 
    gridWidth:1250, // Control the grid width 
    gridHeight:1000, // Control the grid height 
    checkboxSelector: {
      // optionally change the column index position of the icon (defaults to 0)
      // columnIndexPosition: 1,

      // remove the unnecessary "Select All" checkbox in header when in single selection mode
      hideSelectAllCheckbox: false,

      // you can override the logic for showing (or not) the expand icon
      // for example, display the expand icon only on every 2nd row
      // selectableOverride: (row: number, dataContext: any, grid: SlickGrid) => (dataContext.id % 2 === 1)
    },
    multiSelect: false,
    rowSelectionOptions: {
      // True (Single Selection), False (Multiple Selections)
      selectActiveRow: false,
    },
  };

  
 
  this.dataset =  [
    { id: 1, title: 'Task 1', isActive:true, noActive:true, yesActive:true, align:'ajay', alig:'vighnesh', center:'ajay',  website:'https://www.example.com',  csvData: ['value1', 'value2', 'value3'], bold:'a', name:'ajay', age:1, fruit: 'Apple', start:'2020-3-11',finish:'2021-5-7', duration: 5 , effortDriven : true, completed:10, percentComplete2:10 , currency:'IND' },
    { id: 2, title: 'Task 2',isActive:false, noActive:false, yesActive:false, align:'vijay', alig:'vicky', center:'vicky', website:'https://www.google.com',  csvData: ['foo', 'bar', 'baz'], bold:'b', name:'vicky', age:2, fruit: 'Banana', start:'2021-3-11',  finish:'2022-5-7', duration: 1, effortDriven : false , completed:50, percentComplete2:50, currency:'USD' },
    { id: 3, title: 'Task 3',isActive:true, noActive:true, yesActive:true, align:'raj', alig:'ram', center:'raj',  website:'https://www.yahoo.com',  csvData: ['1','2'], bold:'c', name:'av', age:3, start:'2020-2-11',finish:'2021-6-7', duration: 15, effortDriven : false ,  completed:100, percentComplete2:100, currency:'PK' },

  ]; 

}


angularGridReady1(angularGrid: AngularGridInstance) {
  this.angularGrid1 = angularGrid;
}

toggleCompletedProperty(item: any) {
  // toggle property
  if (typeof item === 'object') {
    item.completed = !item.completed;

    // simulate a backend http call and refresh the grid row after delay
    setTimeout(() => {
      this.angularGrid1.gridService.updateItemById(item.id, item, { highlightRow: false });
    }, 250);
  }
}
  

  
}

function sparkline(svgElem: SVGSVGElement, historic: any, arg2: { interactive: boolean; }) {
  throw new Error('Function not implemented.');
}
function arrayObjectToCsv(dataset: any[]) {
  throw new Error('Function not implemented.');
}


