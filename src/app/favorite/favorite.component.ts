import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite']  // another way to mark input properties, not the better approach
  encapsulation: ViewEncapsulation.Emulated  // Emulated means angular emulates shadow dom for this component
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite = false;  // now we have marked this as an input (input property)
                                  // and it can be exposed to outside. It is also optionally set with an alias
  // isFavorite = false;
  @Output('change') change = new EventEmitter();  // output property
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      newvalue: this.isFavorite
    });
  }
}

export interface FavoriteChangeEventArgs {
  newValue: boolean;
}
