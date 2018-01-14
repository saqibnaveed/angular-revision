import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('isLiked') isLiked: boolean;
  @Input('likesCount') likesCount: number;
  @Output('likeChange') likeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('On click called.');
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likesCount++;
    } else {
      this.likesCount--;
    }
    // emit event
    this.likeChange.emit({
      isLiked: this.isLiked,
      likesCount: this.likesCount
    });
  }  // onClick

}
