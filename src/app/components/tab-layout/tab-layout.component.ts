import { Component, OnInit, Input, AfterViewInit, TemplateRef, ContentChild } from '@angular/core';
import { TabLayout } from '../../components/tab-layout/tab-layout.model';

declare const $: any;
@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent implements OnInit, AfterViewInit {

  @Input() tab_layout_ui_data_to_receive: TabLayout;
  @ContentChild(TemplateRef)
  @Input() layoutTemplate: TemplateRef<any>;

  constructor() { }
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
