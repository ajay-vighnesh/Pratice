import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlickGrid, Column, Editors, FieldType, Filters, Formatter, Formatters, GridOption, FlatpickrOption } from 'angular-slickgrid';
import { data } from 'jquery';
import Sortable from 'sortablejs'
import { SlickCustomTooltip } from '@slickgrid-universal/custom-tooltip-plugin';
import { filter } from 'rxjs';
import flatpickr from 'flatpickr';

const emojFormat: Formatter = (row: number, cell: number, value: any, columnDef: Column, dataContext: any) =>
  `${value === 'good' ? '&#128525;' : value === 'normal' ? '&#128578;' : '&#128577;'}`

// //
// const viewButton: Formatter = (row: number, cell: number, value: any, columnDef: Column, dataContext: any) => {
//   return `<button data-id="${value}">View</button>`;
// }

const viewButton : Formatter = (row: number, cell: number, value: any, columnDef: Column, dataContext: any) => {
  // return `<button data-id="${value}">View</button>`;
  return `<button class="view-button" data-id="${value}">View</button>`;
}
// //

// //
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
// //


// const starformatter: Formatter = (row, cell, value, columnDef, dataContext, grid) => {
//   let stars = '';
//   for (let i = 1; i <=value; i++) {
//     stars += '<i class="fa fa-star" style="color: gold;"></i>' 
//   }
//   return `<span class="star-rating">${stars}</span>`;
// }

const emojiFormatter: Formatter = (row, cell, value, columnDef, dataContext, grid) => {
  let emoji;
  switch (value) {
    case 1:
      emoji = '\u{1F621}'; 
      break;
    case 2:
      emoji = '\u{1F614}'; 
      break;
    case 3:
      emoji = '\u{1F610}'; 
      break;
    case 4:
      emoji = '\u{1F642}'; 
      break;
    case 5:
      emoji = '\u{1F601}'; 
      break;
    default:
      emoji = '\u{1F610}'; 
  }
  return `<span class="emoji-rating">${emoji}</span>`;
}

const starFormatter: Formatter = (row, cell, value, columnDef, dataContext, grid) => {

  let str=''
  for(let i=0;i<value;i++){
    str = str + "★"
  }

  return `<span >${str}</span>`
}
const emojFormatter: Formatter = (row, cell, value, columnDef, dataContext, grid) => {

  let str1=''
  for(let i=0;i<value;i++){
    str1 = str1 + "😐"
  }

  return `<span >${str1}</span>`
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit{
  val:any
  columnDefinitions: any;
  gridOptions:any;
  dataset: any;
  day: any;
  month: any;
  yr: any;
  final:any
  angularGrid1: any;

  constructor(private router:Router){

  }
  ngOnInit(): void {
    this.val=new Date("2024-3-11");
    this.day=this.val.getDate()
    this.month=this.val.getMonth()
    this.yr=this.val.getFullYear()
    this.final=`${this.day}-${this.month}-${this.yr}`
    this.loadData()
  }
  

  
  loadData(){
  // startDate: new Date(randomYear, randomMonth, randomDay),

  this.columnDefinitions = [
    { id: 'id', name: 'id', field: 'id', sortable: true, filterable: true, },
    { id: "title", name: "Title", field: "title", formatter: (_row: any, _cell: any, value: any, _column: any, dataContext: any) => `<p title="${dataContext.id} ${value || ''}">${value || ''}</p>`,},
  { id: 'country', name: 'country', field: 'country', formatter: (_row: any, _cell: any, value: any, _column: any, dataContext: any) => `<span title="${dataContext.id} ${value || ''}">${value || ''}</span>`, sortable: true, filterable: true, editor: {
       model: Editors.multipleSelect, 
    collection: [{ value: 'India', label: 'India' }, { value: 'France', label: 'France' }, { value: 'China', label: 'China' },

    ]
  }},
  

  { id: 'startDate', name: 'startDate', field: 'startDate', 
  type:FieldType.date  ,sortable: true, editor: { model: Editors.date,  placeholder: '', 

  editorOptions: {
    // dateFormat:'YY-mm-dd\\Z',
    // dateFormat:'y-m-d',
    dateFormat:'d-m-Y',    
    // dateFormat:'Y-m-d',
    //  altFormat: 'F j, Y',
    //  altInput: true,
    //  altFormat: 'Y-m-d',
     minDate: 'today',
     // dateFormat:'d-m-Y',
     disable: [(date: Date) => this.isWeekendDay(date)],
     // onOpen: () => console.log('Calendar opened'),
     // onClose: () => console.log('Calendar closed'),
     
   } as FlatpickrOption,

   }, filterable: true, filter: { model: Filters.compoundDate } , 
},

  // //
  { id: 'ratings', name: 'ratings', field: 'ratings', sortable: true, filterable: true, formatter:starFormatter  },
  // //
  // {
  //   id: 'priority', nameKey: 'PRIORITY', field: 'priority',
  //   exportCustomFormatter: priorityExportFormatter,
  //   formatter: priorityFormatter,
  //   sortable: true, filterable: true,
  //   filter: {
  //     collection: [{ value: '', label: '' }, { value: 1, labelKey: 'LOW' }, { value: 2, labelKey: 'MEDIUM' }, { value: 3, labelKey: 'HIGH' }],
  //     model: Filters.singleSelect,
  //     enableTranslateLabel: true,
  //   }
  // },

  // //
  { id: 'feedback', name: 'feedback', field: 'feedback', sortable: true, filterable: true, formatter:emojFormatter,
   },

   {id:'delete',name:'delete',field:'delete',onCellClick:(e:Event,args:any)=>{
    if(confirm("Do you want to delete?")){
    this.angularGrid1.gridService.deleteItemById(args.dataContext.id)}}
    
   },

// { id:'view', name:'view', field:'view', formatter:viewButton }
{ id:'view', name:'view', field:'view', onCellClick:(e:Event,args:any) => {
  this.router.navigate(["view"],{queryParams:{data:JSON.stringify(args.dataContext)}})
  console.log('args.dataContext',args.dataContext);
} 
},

{
  id: 'dateOfJoining', name: 'DateOfJoining', field: 'dateOfJoining', headerKey: 'DATEOFJOINING',
  exportWithFormatter: true,
  sortable: true,
  // formatter: Formatters.dateEuro,
  type: FieldType.date,
  filterable: true,
  editor: {
     model: Editors.date,
    editorOptions: {
     dateFormat:'Y-m-d',
      // altFormat: 'F j, Y',
      // altInput: true,
      // altFormat: 'd-m-Y',
      minDate: 'today',
      // dateFormat:'d-m-Y',
      disable: [(date: Date) => this.isWeekendDay(date)],
      // onOpen: () => console.log('Calendar opened'),
      // onClose: () => console.log('Calendar closed'),
      
    } as FlatpickrOption,
    

  },
  filter: {
    model: Filters.compoundDate,
    
  }
}

  ];



  this.gridOptions = {
     externalResources: [new SlickCustomTooltip()],
     enableRowBasedEdit: true,
    enableAutoResize: true,
    autoEdit : true,
    enableCellNavigation: true,
    enableSorting: true,
    multiColumnSort:true,
    editable:true,
    enablePagination:true,
    gridWidth:1250, // Control the grid width 
    gridHeight:500, // Control the grid height 
    enableRowSelection: true,
    enableCheckboxSelector: true,  // Check Box
    enableFiltering: true,
    rowHeight: 50, // Row height 
    headerRowHeight:50, // Adjust the search bar height
    checkboxSelector: {
      hideSelectAllCheckbox: false,  // Select All Check Box
    },
    multiSelect: true,
    rowSelectionOptions: {
      selectActiveRow: false,
    },
       
  };

  

 
  this.dataset =  [
    { id: 1, country: 'United States', title:'asdf', startDate:'2021-3-11',  duration: 5 , ratings:1, feedback:3,delete:'delete',view:'view',dateOfJoining:'2024-10-7'  },
    { id: 2, country: 'Canada', title:'asdf', startDate:'2021-3-11', duration: 10,ratings:2, feedback:2,delete:'delete',view:'view',dateOfJoining:'2024-10-7' },
    { id: 3, country: 'Boston', title:'123456', startDate:'2024-4-1', duration: 15,ratings:3, feedback:1,delete:'delete',view:'view',dateOfJoining:'2024-10-7' },
    { id: 4, country: 'Boston', title:'asdf', startDate:'2024-4-1', duration: 15,ratings:3, feedback:1,delete:'delete',view:'view',dateOfJoining:'2024-10-7' },
    { id: 5, country: 'Boston', title:'asdf', startDate:'2024-4-1', duration: 15,ratings:3, feedback:1,delete:'delete',view:'view',dateOfJoining:'2024-10-7' },
    { id: 6, country: 'Boston', title:'asdf', startDate:'2024-4-1', duration: 15,ratings:3, feedback:1,delete:'delete',view:'view',dateOfJoining:'2024-10-7' },
    { id: 7, country: 'Boston', title:'asdf', startDate:'2024-4-1', duration: 15,ratings:3, feedback:1,delete:'delete',view:'view',dateOfJoining:'2024-10-7' },
    { id: 8, country: 'Boston', title:'asdf', startDate:'2024-4-1', duration: 15,ratings:3, feedback:1,delete:'delete',view:'view',dateOfJoining:'2024-10-7' },
    { id: 9, country: 'Boston', title:'asdf', startDate:'2024-4-1', duration: 15,ratings:3, feedback:1,delete:'delete',view:'view',dateOfJoining:'2024-10-7' },
    { id: 10, country: 'Boston', title:'asdf', startDate:'2024-4-1', duration: 15,ratings:3, feedback:1,delete:'delete',view:'view',dateOfJoining:'2024-10-7' },
  ];
}

isWeekendDay(date: Date): boolean {

  return (date.getDay() === 0 || date.getDay() === 6);
}

getDate(){
  console.log(flatpickr.formatDate(new Date(), "d-m-Y"))
  return flatpickr.formatDate(new Date(), "Y-m-d")
}

angularGridReady(angularGrid:any) {
    this.angularGrid1 = angularGrid.detail;

    this.angularGrid1.slickGrid.onDblClick.subscribe((e: Event, args: any) => {
      console.log(this.angularGrid1,'angularGrid1');
      
      const row = args.row;
      console.log(this.dataset[row])
      this.router.navigate(['view'],{queryParams:{data:JSON.stringify(this.dataset[row])}})
      console.log("yes")
    });
  }
}


