import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  categories = [
    {id: 1, name: 'development'},
    {id: 2, name: 'art'},
    {id: 3, name: 'language'}
  ];

  constructor() { }

  ngOnInit() {
  }

  submit(course) {
    console.log(course);
  }

}
