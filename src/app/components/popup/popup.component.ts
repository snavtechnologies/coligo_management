import { Component, OnInit, AfterViewInit, Input, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { ScrollToBottomDirective } from 'app/directives/scroll-to-bottom.directive';
declare const $: any;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, AfterViewInit {
  @ContentChild(TemplateRef)
  @Input() layoutTemplate: TemplateRef<any>;
  @Input() popup_id;
  @ViewChild(ScrollToBottomDirective)
  scroll: ScrollToBottomDirective;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  // show() {
  //   $('#myModal').modal('show');
  // }

  // hide() {
  //   $('#myModal').modal('hide');
  // }

}
