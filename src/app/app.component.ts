import { FavoriteChangeEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';

  // courses = [];  // for ngIf

  courses = []; // for ngFor

  post = {
    title: 'Title',
    isFavorite: true
  };  // for favorite component

  tweet = {
    body: 'Body of the tweet...',
    isLiked: false,
    likesCount: 0
  };  // for like component

  viewMode = 'map'; // for ngSwitchCase

  canSave = true; // for ngStyle

  task = {
    title: 'Review Applications',
    assignee: {
      name: 'John Smith'
    }
  };  // for safe traversal operator

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
    console.log('Favorite changed: ', eventArgs);
  }  // handle change event from favorite component

  OnLikeChangeCalled(eventArgs) {
    console.log('Like changed: ', eventArgs);
  }  // handle change event from like component

  onAdd() {
    this.courses.push({
      id: 4,
      name: 'Course 4'
    });
  }  // onAdd, method for testing ngFor

  onChange(course) {
    // let index = this.courses.indexOf(course);
    // this.courses.splice(index, 1);
    course.name = 'Updated';
  } // onChange(course), for testing ngFor

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'}
    ];
  }  // loadCourses(), for testing ngFor

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }  // trackCourse, for ngFor
}
