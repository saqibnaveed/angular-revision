import { FavoriteChangeEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';

  post = {
    title: 'Title',
    isFavorite: true
  };  // for favorite component

  tweet = {
    body: 'Body of the tweet...',
    isLiked: false,
    likesCount: 0
  };  // for like component

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
    console.log('Favorite changed: ', eventArgs);
  }  // handle change event from favorite component

  OnLikeChangeCalled(eventArgs) {
    console.log('Like changed: ', eventArgs);
  }  // handle change event from like component
}
