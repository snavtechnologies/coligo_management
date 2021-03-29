import { Component, OnInit, Input, EventEmitter, Output, ContentChild, TemplateRef, ElementRef} from '@angular/core';
import { element } from 'protractor';

declare var jquery: any;
declare const $: any;

@Component({
  selector: 'app-html-components',
  templateUrl: './html-components.component.html',
  styleUrls: ['./html-components.component.scss']
})
export class HtmlComponentsComponent implements OnInit {
  startDate = new Date(1950, 0, 1);
  headings ;

  @Input() html_data_to_pass;
  @Output() html_events = new EventEmitter();
  @Output() html_addmore_data = new EventEmitter();
  @ContentChild('standardTemplate') standardTemplate: TemplateRef<ElementRef>;


  @Input() form_data;

  constructor() { }

   // function to convert received styles array to styles object
   getStyle(styles_array) {
    const rv = {};
    for (let i = 0; i < styles_array.length; ++i) {
      rv[styles_array[i].property] = styles_array[i].value;
    }
    return (rv);
  }

  html_events_addmore_refresh() {
    const anchor_table = this.html_data_to_pass[0].add_more_button_name;
    const flag = confirm('All added data will be lost..,Please Confirm for Refresh..?');
    if (flag) {
    $('.' + anchor_table + '_tbody').empty();
    $('.' + anchor_table + '_thead').hide();
    const addMore = {
      table_name: anchor_table,
      table_data: 0
    }
    this.html_addmore_data.emit(addMore);
    }
  }

  html_events_addmore(id) {
    const elements = this.html_data_to_pass[0]['elements'];
    let table_cont = '';

    table_cont += '<tr>';
    let null_check: boolean;
    null_check = false;
      elements.forEach(function(value) {
       // this.headings[value.name] = value.name;
        if (value.select === true) {
         const sel_val = $('.' + value.name).text();
          table_cont += '<td>' + sel_val.replace('Select Type', '') + '</td>';
          if ($('.' + value.name).text() === 'Select TypeSelect Type') {
            null_check = true;
          }
      } else {
        table_cont += '<td>' + $('.' + value.name).val() + '</td>';
        if ($('.' + value.name).val() === '') {
          null_check = true;
        }
        $('.' + value.name).val('');
      }
    });
    table_cont += '</tr>';

    const anchor_table = this.html_data_to_pass[0].add_more_button_name;
    // const heading = elements.name;
   // console.log(heading);
    console.log('anchor' + anchor_table);
    if (!null_check) {
    $('.' + anchor_table).append(table_cont);
    $('.' + anchor_table + '_thead').show();
    }
   //  const jsonTables = new HtmlTableToJson(id);
  // console.log(jsonTables.results);
      const table =  $('.' + anchor_table).tableToJSON();
      const addMore = {
        table_name: anchor_table,
        table_data: table
      }
      this.html_addmore_data.emit(addMore);
  //  console.log(table);
  // alert(JSON.stringify(table));
    }

  html_event(uniq_identity, arg, is_select) {

    let e_type = arg.type;
    let sel;
    if (is_select === 1) {
      sel = arg.source.value;
      e_type = 'change';
    } else if (is_select === 2) {
      sel = arg;
      e_type = 'datechange';
    } else {
      sel = arg.target.value;
    }
    const emit_obj = {
      uniq_identity: uniq_identity,
      e_type: e_type,
      value: sel
    }
     this.html_events.emit(emit_obj);

  }
  html_event_image(uniq_identity, arg: FileList) {
    const  event_type = 'change';
    const emit_obj = {
      uniq_identity: uniq_identity,
      e_type: event_type,
      value: arg
    }
     this.html_events.emit(emit_obj);
    }


  ngOnInit() {
  //  console.log(JSON.stringify(this.html_data_to_pass));
  }

}
