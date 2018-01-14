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
    this.likesCount += (this.isLiked) ? (this.likesCount > 0 ? -1 : 0) : 1;
    this.isLiked = !this.isLiked;
    // emit event
    this.likeChange.emit({
      isLiked: this.isLiked,
      likesCount: this.likesCount
    });
  }  // onClick

}
