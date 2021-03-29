import { Component, OnInit, ContentChild, TemplateRef, ElementRef, Input } from '@angular/core';
import { HtmlComponentFinal } from '../../common_interfaces/html-component.model';
import { BasicFunctionsService } from '../../services/basic-functions.service';
import { SpinnerService } from '../../services/spinner.service';
declare const $: any;
import { FormControl } from '@angular/forms';
import { TableData } from 'app/common_interfaces/tabledata.model';


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  table_data_to_send: TableData = {
    minmax: {
      need_minmax: true,
      // issue_date_column_no: '2',
      columns_def: [{
              name: 'Two',
              index: '1'
          }, {
              name: 'Four',
              index: '3'
          }]
    },
    table: {
      is_datatable: true,
      table_id: 'loan_table',
      have_non_sort_col: true,
      non_sort_cols: '3',
      need_colour: true,
      color_cols: '3_#BDB76B',
      need_header: true,
      header: 'one~two~three~four'
    },
    excel: {
        need_export_to_excel: true,
        export_filename: 'trial_xlsx_report_new',
        type: 'xlsx'
    },
    column_search: {
        need_column_search: true,
        cols: '1~0~1~0'
    }
}

table_data_to_send1: TableData = {
  minmax: {
    need_minmax: true,
    // issue_date_column_no: '2',
    columns_def: [{
            name: 'Two',
            index: '1'
        }, {
            name: 'Four',
            index: '3'
        }]
  },
  table: {
    is_datatable: true,
    table_id: 'loan_table_1',
    have_non_sort_col: true,
    non_sort_cols: '3',
    need_colour: false,
    need_header: true,
    header: 'one~two~three~four'
  },
  excel: {
      need_export_to_excel: false,
  },
  column_search: {
      need_column_search: true,
      cols: '1~0~1~0'
  }
}

  @Input() address1;
  constructor(public b: BasicFunctionsService, public spin: SpinnerService) { }

  ngOnInit() {
  }

}
