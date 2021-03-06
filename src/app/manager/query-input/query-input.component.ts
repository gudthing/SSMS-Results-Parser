import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-query-input',
  templateUrl: './query-input.component.html',
  styleUrls: ['./query-input.component.css']
})
export class QueryInputComponent implements OnInit {
  @Input() identifier: string;
  textInput = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  submitData() {
    if (this.textInput.length > 0) {
      this.dataService.ssmsInput[this.identifier] = this.textInput;
    }

    // console.log("pushing " + this.identifier + " id and text: " + this.textInput);
  }

  populateFromDummyData() {
    this.textInput = this.dataService.dummyFromData;
  }

  populateToDummyData() {
    this.textInput = this.dataService.dummyToData;
  }

  clearData() {
    this.textInput = '';
  }

  public setData(input: string) {
    this.textInput = input;
  }



}
