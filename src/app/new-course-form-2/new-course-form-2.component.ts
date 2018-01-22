import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course-form-2',
  templateUrl: './new-course-form-2.component.html',
  styleUrls: ['./new-course-form-2.component.css']
})
export class NewCourseForm2Component {

  constructor() { }

  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return (this.form.get('topics') as FormArray);
  }

}
