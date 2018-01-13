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
  };

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
    console.log('Favorite changed.', eventArgs);
  }
}
