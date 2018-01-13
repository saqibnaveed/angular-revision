import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-printer',
  templateUrl: './input-printer.component.html',
  styleUrls: ['./input-printer.component.css']
})
export class InputPrinterComponent implements OnInit {

  sentence: String;
  constructor() { }

  ngOnInit() {
  }

}
