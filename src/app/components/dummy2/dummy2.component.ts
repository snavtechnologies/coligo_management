import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-dummy2',
  templateUrl: './dummy2.component.html',
  styleUrls: ['./dummy2.component.scss']
})
export class Dummy2Component implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function() {
    $('#myModal').modal('hide');
  }, 5000);
  }

  ngAfterViewInit() {
    $('#myModal').modal('show');
  }

}
