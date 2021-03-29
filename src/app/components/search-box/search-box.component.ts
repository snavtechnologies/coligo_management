import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostingService } from '../../services/posting.service';
declare const $: any;

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() search_box;
  @Output() fn_on_search = new EventEmitter();
  searchbtn_id; dropdown_id;
  constructor(public p: PostingService) { }

  toggleSubmit(form: NgForm) {
    this.fn_on_search.emit($('#' + this.search_box.searchbox_id).val());
    $('#' + this.searchbtn_id).prop('disabled', true);
    $('#' + this.search_box.searchbox_id).val('');
  }


  drop_down(str) {

    $('#' + this.searchbtn_id).prop('disabled', true);
    if ( str !== '') {
      document.getElementById(this.dropdown_id).style.display = 'block';

      const formData: FormData = new FormData();
      formData.append('change_bill_id', str);
      formData.append('table_name', this.search_box.search_tablename );
      formData.append('db', this.search_box.search_db );
      formData.append('column_name', this.search_box.search_columnname );
      formData.append('view_column_name', this.search_box.view_columnname );
      formData.append('searchbox_id', this.search_box.searchbox_id );
      formData.append('dropdown_id', this.dropdown_id );
      formData.append('searchbtn_id', this.searchbtn_id );

      this.p.get_searchbox_result(formData)
        .subscribe(response => {
          document.getElementById(this.dropdown_id).innerHTML = response[0];
        }, error => {  });

    } else {
      document.getElementById(this.dropdown_id).style.display = 'none';
    }
  }

  drop_down_show(str) {
    const val_text = $('#' + this.search_box.searchbox_id).val();
    if (val_text !== '') {
    document.getElementById(this.dropdown_id).style.display = str;
    } else {
    document.getElementById(this.dropdown_id).style.display = 'none';
    }
  }


  ngOnInit() {
    this.searchbtn_id = this.search_box.searchbox_id + '_btn';
    this.dropdown_id = this.search_box.searchbox_id + '_dropdown';
  }

}
