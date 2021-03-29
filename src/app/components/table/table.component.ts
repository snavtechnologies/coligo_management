import { Component, OnInit, AfterViewInit, Input, ContentChild, TemplateRef, OnDestroy } from '@angular/core';
import { PostingService } from '../../services/posting.service';
import { DatatableTriggerService } from '../../services/datatable-trigger.service';
import { TableData } from 'app/common_interfaces/tabledata.model';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { Subscription } from 'rxjs/Subscription';


declare const $: any;


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {

  each_heading_result = [];
  give_color = new Array();
  searchbox = new Array();
  minmax_select_id;
  min11_id;
  max11_id;
  private datatable_sub: Subscription;


  @Input() table_data: TableData;
  @ContentChild(TemplateRef)
  @Input() layoutTemplate: TemplateRef<any>;

  exportAsConfig: ExportAsConfig = {
    type: 'xlsx', // the type you want to download
    elementId: '', // the id of html/table element
    }

  constructor(public p: PostingService, private exportAsService: ExportAsService, public dt_trig: DatatableTriggerService) { }

  setminmax() {
      $('#' + this.min11_id).val('');
      $('#' + this.max11_id).val('');
      const table = $('#' + this.table_data.table.table_id).DataTable();
      table.draw();
  }

   export() {
    this.exportAsService.save(this.exportAsConfig, this.table_data.excel.export_filename);
  }

colname_conversion(element) {
      const each_heading = element.split('~');
      each_heading.forEach(ele => {
        let frags = ele.split('_');
        for (let j = 0; j < frags.length; j++) {
          frags[j] = frags[j].charAt(0).toUpperCase() + frags[j].slice(1);
        }
        frags = frags.join(' ');
        this.each_heading_result.push(frags);
      });
  }

//  load_common_loan_table() {
//     const database = 'test';

//     this.p.get_table_options()
//     .subscribe(data1 => {
//     // SECOND AJAX CALL

//         const  obj = data1;
//         if (obj.options_input_error) {
//             alert(obj.options_input_error);
//         }

//         for (let i = 0; i < obj.name.length; i++) {
//             $('#colindex').append('<option value=' + obj.value[i] + '>' + obj.name[i] + '</option>');

//         }

//         this.p.get_table_data()
//         .subscribe(data2 => {

//         // FORTH AJAX CALL

//                     const  obj1 = JSON.parse(data2);
//                     const basic_layer = obj1.vertex[0];
//                     let check_issuedate_flag = 0;
//                     const col_elements = obj1.vertex[0].col_names.split('~');
//                     const no_of_total_cols = col_elements.length;
//                     const date_stamp = basic_layer.daterange;
//                     const non_sort = basic_layer.non_sort_cols;
//                     const color_cols = basic_layer.content_color;
//                     const give_color = new Array();
//                     // tslint:disable-next-line:no-shadowed-variable
//                     for (let i = 0; i < no_of_total_cols; i++) {
//                         give_color[i] = '';
//                     }
//                     if (color_cols) {
//                       const color_cols_split = color_cols.split('~');
//                       const no_of_color_cols = color_cols_split.length;

//                       // tslint:disable-next-line:no-shadowed-variable
//                       for (let i = 0; i < no_of_color_cols; i++) {
//                         const c_detail = color_cols_split[i].split('_');
//                             give_color[c_detail[0]] = c_detail[1];
//                       }
//                     }

//                     let non_sort_splitted_length;
//                     let non_sort_splitted;

//                     if (non_sort) {
//                        non_sort_splitted = non_sort.split('~');
//                        non_sort_splitted_length = non_sort_splitted.length;
//                     } else {
//                        non_sort_splitted_length = 0;
//                     }

//                     const searchbox = new Array();
//                     const checkbox = new Array();

//                     if (basic_layer.col_fn) {

//                         const col_fn_split = basic_layer.col_fn.split('~');
//                         const len_col_fn_split = col_fn_split.length;
//                         // tslint:disable-next-line:no-shadowed-variable
//                         for ( let j = 0; j < len_col_fn_split; j++) {
//                               searchbox[j] = col_fn_split[j].toString()[0];
//                               checkbox[j] = col_fn_split[j].toString()[1];
//                         }

//                     }

//                     let issue_date_col_no;
//                     if (basic_layer.issuedate_flag) {
//                         check_issuedate_flag = 1;
//                         $('#issue_date_column_no').val(basic_layer.issuedate_flag);
//                         issue_date_col_no =   $('#issue_date_column_no').val();

//                     }

//                     let daterange_val_split;
//                     if (basic_layer.daterange) {
//                         $('#daterange_col').val(basic_layer.daterange_cols);
//                         const daterange_val =   $('#daterange_col').val();
//                         daterange_val_split = daterange_val.split('~');
//                     }

//                     if (basic_layer.sum_col_values) {
//                         const sum_cols_hidden = basic_layer.sum_col_values;
//                         $('#collection_report_sum').val(sum_cols_hidden);
//                     }

// tslint:disable-next-line: max-line-length
// /*-----------------------------------------------------------------------------------------------------------------------------------------------*/

//                     // inserting header
//                     let activate = 0;
//                     // tslint:disable-next-line:no-shadowed-variable
//                     for (let i = 0; i < no_of_total_cols; i++) {


//                        const colname_to_display = this.colname_conversion(col_elements[i]);
//                        if (basic_layer.daterange) {
//                             // tslint:disable-next-line:no-shadowed-variable
//                             for (let k = 0; k < daterange_val_split.length; k++) {
//                                 // tslint:disable-next-line:triple-equals
//                                 if (i == daterange_val_split[k]) {
//                                     activate = 1;
//                                 }
//                             }
//                         }
//                         // tslint:disable-next-line:triple-equals
//                         if (basic_layer.daterange && (activate == 1)) {


//                             // tslint:disable-next-line:triple-equals
//                             if (searchbox[i] == '1') {
                               // tslint:disable-next-line:max-line-length
//                                $('#collection_report>thead>tr').append('<th>' + colname_to_display + date_stamp + '<input type="text" id="' + i + '" class="customer_search" placeholder="search" style="width: 100px"></th>');
//                             } else {
//                             $('#collection_report>thead>tr').append('<th>' + colname_to_display + date_stamp + '</th>');
//                             }

//                         activate = 0;
//                         } else {
//                             // tslint:disable-next-line:triple-equals
//                             if (searchbox[i] == '1') {
                              // tslint:disable-next-line:max-line-length
//                               $('#collection_report>thead>tr').append('<th>' + colname_to_display + '<input type="text" id="' + i + '" class="customer_search" placeholder="search" style="width: 100px"></th>');
//                             } else {
//                               $('#collection_report>thead>tr').append('<th>' + colname_to_display + '</th>');
//                             }
//                         }
//                     }
//                     // inserting header



//                     // inserting td's
//                     let content_val = '';
//                     let temp_x;
//                     // tslint:disable-next-line:no-shadowed-variable
//                     for (let i = 1; i <= obj1.vertex[0].no_of_tablerows; i++) {

//                             content_val  += '<tr>';
//                             // tslint:disable-next-line:no-shadowed-variable
//                             let j = 0;

//                             // code to insert datestamp to title of daterange colmns
//                             // tslint:disable-next-line:forin
//                             for (const x in obj1.vertex[i]) {
//                                 temp_x = x;
//                                 if (basic_layer.daterange) {
//                                 for (let k = 0; k < daterange_val_split.length; k++) {

//                                     // tslint:disable-next-line:triple-equals
//                                     if (j == daterange_val_split[k]) {
//                                         temp_x = x + ' ' + date_stamp;
//                                     }
//                                 }
//                                }

//                                 // tslint:disable-next-line:triple-equals
//                                 if ((check_issuedate_flag == 1) && (j == issue_date_col_no)) {

//                                     const issue_html_splitted = obj1.vertex[i][x].split('~');

                                // tslint:disable-next-line:max-line-length
//                                 content_val  += '<td style="background-color:' + give_color[j] + ';" title="' +  this.colname_conversion(temp_x) + '"><div hidden>' + issue_html_splitted[0] + '</div> ' + issue_html_splitted[1] + '</td>';
//                                 } else {
                                // tslint:disable-next-line:max-line-length
//                                 content_val  += '<td style="background-color:' + give_color[j] + ';" title="' +  this.colname_conversion(temp_x) + '">' + obj1.vertex[i][x] + '</td>';
//                                 }
//                                 j++;

//                             }
//                             content_val  += '</tr>';
//                     }
//                     // inserting td's


//                     document.getElementById('tbdy').innerHTML = content_val;

//                     // inserting footer
//                     // tslint:disable-next-line:no-shadowed-variable
//                     for (let i = 0; i < no_of_total_cols; i++) {
//                         $('#collection_report>tfoot>tr').append('<td></td>');

//                     }
//                     // inserting footer

// tslint:disable-next-line:max-line-length
// /*-----------------------------------------------------------------------------------------------------------------------------------------------*/


//                     // code to right shift all sum col columns
//                     let count = 0;
//                     let style_flag;
//                     for (let i = 1; i <= no_of_total_cols; i++) {
//                          style_flag = 0;
//                          const fetch_sum_vals = $('#collection_report_sum').val();
//                          const fetched_sum_vals = fetch_sum_vals.split('~');
//                          const leng = fetched_sum_vals.length;
//                          for (let j = 0; j < leng; j++) {
//                              // tslint:disable-next-line:triple-equals
//                              if (count == fetched_sum_vals[j]) {
//                                  style_flag = 1;

//                              }
//                          }
//                          // tslint:disable-next-line:triple-equals
//                          if (style_flag == 1) {
//                              $('#collection_report td:nth-child(' + i + ')').css('text-align', 'right');

//                          }
//                          count++;
//                     }
//                     // code to right shift all sum col columns
//                     // to disable selected th sorting
//                     for (let i = 0; i < non_sort_splitted_length; i++) {
//                          $('table th:nth-child(' + (Number(non_sort_splitted[i]) + 1) + ')').addClass('non_sorting_class');
//                     }
//                     // to disable selected th sorting

//        $('#colindex').setIssueMask($('#issue_date_column_no').val());

//        $('.min_max').on( 'keyup', function () {
//            $('#colindex').setissuesearch($('#issue_date_column_no').val());
//        });

//         $('[data-mask]').inputmask();
//         $('.p_date').postdate();

//        $('#min11').inputmask('[9][9][9][9][9][9][9][9][9][9]', {'placeholder': ''});
//        $('#max11').inputmask('[9][9][9][9][9][9][9][9][9][9]', {'placeholder': ''});
//        $('#min11, #max11').keyup( function() {
//              const table = $('#collection_report').DataTable();
//              table.draw();
//        });

//         $('.customer_search').on( 'keyup', function () {

//            const This_id = $(this).attr('id');
//            const table = $('#collection_report').DataTable();
//            table
//           .columns( This_id )
//           .search( this.value )
//           .draw();
//          } );

//             $('#aloader' ).hide();

//           }, error => {  });

//           }, error => {  });

// } // main load table fn

    do_customer_search(hash_ref) {
        const table = $('#' + this.table_data.table.table_id).DataTable();
        table
       .columns( (hash_ref.id).split('_').pop() )
       .search( hash_ref.value )
       .draw();
    }

  ngOnInit() {
    this.minmax_select_id = this.table_data.table.table_id + '_colindex';
    this.min11_id = this.table_data.table.table_id + '_min11';
    this.max11_id = this.table_data.table.table_id + '_max11';
    this.exportAsConfig.elementId = this.table_data.table.table_id;
    this.exportAsConfig.type = this.table_data.excel.type;

    if (this.table_data.table.need_header) {
    this.colname_conversion(this.table_data.table.header)

    }

    // tslint:disable-next-line:no-shadowed-variable
    for (let i = 0; i < 50; i++) {
        this.give_color[i] = '';
    }
    if (this.table_data.table.need_colour) {
      const color_cols_split = this.table_data.table.color_cols.split('~');
      const no_of_color_cols = color_cols_split.length;

      // tslint:disable-next-line:no-shadowed-variable
      for (let i = 0; i < no_of_color_cols; i++) {
        const c_detail = color_cols_split[i].split('_');
            this.give_color[c_detail[0]] = c_detail[1];
      }
    }

    if (this.table_data.column_search.need_column_search) {

        const col_fn_split = this.table_data.column_search.cols.split('~');
        const len_col_fn_split = col_fn_split.length;
        // tslint:disable-next-line:no-shadowed-variable
        for ( let j = 0; j < len_col_fn_split; j++) {
                this.searchbox[j] = col_fn_split[j].toString()[0];
        }
        // console.log(this.searchbox);
    }

    this.datatable_sub = this.dt_trig.getDatatableListener()
    .subscribe((dt_trig_detail: {table_id: string, trig: boolean, sum_cols: string, need_scroll: boolean}) => {
      // tslint:disable-next-line:triple-equals
      if (dt_trig_detail.trig == true) {
        if (!$.fn.DataTable.isDataTable( '#' + dt_trig_detail.table_id )) {
        const table = $('#' + dt_trig_detail.table_id).DataTable({
          'scrollCollapse': true,
          'bPaginate': true,
          'bLengthChange': true,
          'lengthMenu': [ [10, 25, 50, 100, -1], [10, 25, 50, 100, 'All'] ],
          'bFilter': true,
          'bSort': true,
          'bInfo': true,
          'bAutoWidth': true,
          'processing': true,
          'scrollX': dt_trig_detail.need_scroll,
          'aoColumnDefs':
          [{
                 'bSortable': false, 'aTargets': ['non_sorting_class']
          }],
          'footerCallback': function () {
            if (dt_trig_detail.sum_cols) {
            const oTable = $('#' + dt_trig_detail.table_id).dataTable();
            const data = oTable._('tr', {'filter': 'applied'});
            const num_rows = data.length;
            const api = this.api();
            // Remove the formatting to get integer data for summation
            const intVal = function ( i ) {
            return typeof i === 'string' ?
                // tslint:disable-next-line:radix
                parseInt(i) :
                typeof i === 'number' ?
                    i : 0;
            };
            const sum_columns = dt_trig_detail.sum_cols;
            const details_split = sum_columns.split('~');
            const len = details_split.length;
            const name = [];
            // tslint:disable-next-line:triple-equals
            if (num_rows && num_rows != '1') {
              //  $('.hide_on_empty_table').show();
                for ( let i = 0; i < len; i++ ) {
                     name[i] = api
                    .column( details_split[i], {'filter': 'applied'} )
                    .data()
                    .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                    } );
                }
            // tslint:disable-next-line:triple-equals
            } else if ( num_rows == '1') {
            //   $('.hide_on_empty_table').show();
               const i = 0;
            // tslint:disable-next-line: no-shadowed-variable
               for ( let i = 0; i < len; i++ ) {
                   name[i] = api
                   .column( details_split[i], { page: 'current'} )
                   .data()
                   .reduce( function (a, b) {
                       return intVal(a) + intVal(b);
                   }, 0 );
               }
            } else {
              //  $('.hide_on_empty_table').hide();
                for ( let i = 0; i < len; i++ ) {
                  name[i] = 0;
                }
            }
            // Print sum in footer
            for ( let i = 0; i < len; i++ ) {
              console.log('sum' + name[i].toFixed(2));
              console.log(len);
                $( api.column( details_split[i] ).footer() ).html('<b>' + name[i].toFixed(2) + '</b>');
            }
          }
          } // footer call back close
         /* 'footerCallback': function ( row, data, start, end, display ) {
            const api = this.api();
            const nb_cols = api.columns().nodes().length;
            let j = 3;
            while ( j < nb_cols) {
              const pageTotal = api
                    .column( j, { page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                        return Number(a) + Number(b);
                    }, 0 );
              // Update footer
              $( api.column( j ).footer() ).html(pageTotal);
              j++;
            }
          }*/
         /* 'footerCallback': function () {
            let api = this.api();

            // Remove the formatting to get integer data for summation
            const intVal = function ( i ) {
                return typeof i === 'string' ? i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            // Total over all pages
            const total = api
                .column( 4 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );

            // Total over this page
            const pageTotal = api
                .column( 4, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );

            // Update footer
            $( api.column( 4 ).footer() ).html(
                '$' + pageTotal + ' ( $' + total + ' total)'
            );
          }*/
        });
        table.draw();
      }

      // tslint:disable-next-line:triple-equals
      } else if (dt_trig_detail.trig == false) {
        const table = $('#' + dt_trig_detail.table_id).DataTable();
        table.destroy();
      }
    });
  }

  ngAfterViewInit() {
    const self1 = this;

    let non_sort_splitted_length;
    let non_sort_splitted;

    if (this.table_data.table.have_non_sort_col) {
       non_sort_splitted = this.table_data.table.non_sort_cols.split('~');
       non_sort_splitted_length = non_sort_splitted.length;
    } else {
       non_sort_splitted_length = 0;
    }

    for (let i = 0; i < non_sort_splitted_length; i++) {
    $('#' + self1.table_data.table.table_id + ' th:nth-child(' + (Number(non_sort_splitted[i]) + 1) + ')').addClass('non_sorting_class');
    }

    this.give_color.forEach(function (element, i) {
        $('#' + self1.table_data.table.table_id + ' tbody td:nth-child(' + (i + 1) + ')').css('background-color', element );
      });

    if (this.table_data.table.is_datatable) {
    $('#' + self1.table_data.table.table_id).dataTable({
      'scrollY': '800px',
      'scrollCollapse': true,
      'bPaginate': true,
      'bLengthChange': true,
      'lengthMenu': [ [10, 25, 50, 100, -1], [10, 25, 50, 100, 'All'] ],
      'bFilter': true,
      'bSort': true,
      'bInfo': true,
      'bAutoWidth': true,
      'processing': true,
      'scrollX': true,
      'aoColumnDefs':
      [{
             'bSortable': false, 'aTargets': ['non_sorting_class']
      }],
      'footerCallback': function () {
          if (self1.table_data.table.sum_cols) {
          const oTable = $('#' + self1.table_data.table.table_id).dataTable();
          const data = oTable._('tr', {'filter': 'applied'});
          const num_rows = data.length;
          const api = this.api();

          // Remove the formatting to get integer data for summation
          const intVal = function ( i ) {
          return typeof i === 'string' ?
              // tslint:disable-next-line:radix
              parseInt(i) :
              typeof i === 'number' ?
                  i : 0;
          };

          const sum_columns = self1.table_data.table.sum_cols;
          const details_split = sum_columns.split('~');
          const len = details_split.length;
          const name = [];
          // tslint:disable-next-line:triple-equals
          if (num_rows && num_rows != '1') {
              $('.hide_on_empty_table').show();
              for ( let i = 0; i < len; i++ ) {


                   name[i] = api
                  .column( details_split[i], {'filter': 'applied'} )
                  .data()
                  .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                  } );
              }
          // tslint:disable-next-line:triple-equals
          } else if ( num_rows == '1') {
             $('.hide_on_empty_table').show();
             const i = 0;
          // tslint:disable-next-line: no-shadowed-variable
             for ( let i = 0; i < len; i++ ) {

                 name[i] = api
                 .column( details_split[i], { page: 'current'} )
                 .data()
                 .reduce( function (a, b) {

                     return intVal(a) + intVal(b);
                 }, 0 );
             }
          } else {
              $('.hide_on_empty_table').hide();
              for ( let i = 0; i < len; i++ ) {
                name[i] = 0;
              }
          }
          // Print sum in footer
          for ( let i = 0; i < len; i++ ) {

              $( api.column( details_split[i] ).footer() ).html('<b>' + name[i].toFixed(2) + '</b>');
          }
        }
     } // footer call back close
    });
    }


    const self = this;
    const min11 = $('#' + self.min11_id).val();
    const max11 = $('#' + self.max11_id).val();
    // const newarg = self.table_data.minmax.issue_date_column_no;

    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {
            let min, max, mi, ma;
            // data consists of datatables rowwise datas
            const col = $('#' + self.minmax_select_id).val();
            // const col = '1';
            //   col is currenlty selected option
            //    console.log(min11 + '~' + max11 + '~' + col + '~' + newarg);

            // tslint:disable-next-line:triple-equals
            // if ( col == newarg) {
            // // tslint:disable-next-line: no-shadowed-variable
            //     min = min11;
            // // tslint:disable-next-line: no-shadowed-variable
            //     max = max11;
            //     const str1 = min.split('-');
            //     const str2 = str1[2] + '-' + str1[1] + '-' + str1[0];
            //     const str3 = max.split('-');
            //     const str4 = str3[2] + '-' + str3[1] + '-' + str3[0];
            //     const temp1 = str2 + ' 12:00:00';
            //     const temp2 = str4 + ' 12:00:00';
            //     const d1 = new Date(temp1);
            //     mi = d1.getTime() / 1000;
            //     const d2 = new Date(temp2);
            //     ma = d2.getTime() / 1000;
            //     min = 0; max = 0;
            // } else
            {
                min = parseInt($('#' + self.min11_id).val(), 10 );
                max = parseInt($('#' + self.max11_id).val(), 10 );
                mi = 0; ma = 0;
            }
            const data_val = parseFloat( data[col] ) || 0;
            // const allowFilter = [this.table_data.table.table_id];

            if ( ( isNaN( min ) && isNaN( max ) ) ||
                    ( isNaN( min ) && data_val <= max ) ||
                    ( min <= data_val   && isNaN( max ) ) ||
                    ( min <= data_val   && data_val <= max ) ||
                    ( isNaN( mi ) && isNaN( ma ) ) ||
                    ( mi <= data_val && data_val <= ma ) ||
                    ( isNaN( mi ) && data_val <= ma ) ||
                    ( mi <= data_val   && isNaN( ma ) )) {
                        // tslint:disable-next-line:triple-equals
                        // if ( $.inArray( settings.nTable.getAttribute('id'), allowFilter ) == -1 ) {
                            return true;
                        // }
            }
            return false;
            }
        );

    $('#' + self.min11_id + ', #' + self.max11_id).keyup( function() {
        $('.min_max').not( $(this).closest('tr').find('.min_max')).val('');
        const table = $('#' + self.table_data.table.table_id).DataTable();
        table.draw();
    });

      this.each_heading_result.forEach(function (element, i) {
        $('#' + self1.table_data.table.table_id + ' td:nth-child(' + ( i + 1 ) + ')').attr('title', element);​
      });

      // this fixes the broken and un-alligned header during first load
      $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
        // var target = $(e.target).attr("href"); // activated tab
        // alert (target);
        $($.fn.dataTable.tables( true ) ).css('width', '100%');
        $($.fn.dataTable.tables( true ) ).DataTable().columns.adjust().draw();
    } );
    }

    ngOnDestroy() {
      this.datatable_sub.unsubscribe();
    }
}

