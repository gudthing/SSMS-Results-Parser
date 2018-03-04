import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { TableData } from './TableData';
import { TableHeader } from './TableHeader';
import { TableRowData } from './TableRowData';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GenericTableComponent implements OnInit, OnChanges {
  @Input() element: TableData;

  public title: string;
  public tableHeader: TableHeader = new TableHeader('1', '2', '3', '4');
  public tableRowData: TableRowData[];
  public test: string = 'TEST';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.element) { return; }

    this.title = this.element.title;
    this.tableHeader = this.element.tableHeader;
    this.tableRowData = this.element.tableRowData;
  }

}