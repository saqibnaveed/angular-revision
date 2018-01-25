import { BadRequestError } from './../common/bad-request.error';
import { NotFoundError } from './../common/not-found.error';
import { AppError } from './../common/app-errors';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
   }

  ngOnInit() {
    this.service.getPosts()
    .subscribe((response) => {
      this.posts = response.json();
    }, error => {
      alert('An unexpected error occured.');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };
    input.value = '';
    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      // console.log(response.json());
    }, (error: AppError) => {
      if (error instanceof BadRequestError) {
        // this.forms.setErrors(error.originalError);
        console.log('Post created.');
      } else {
        alert('An unexpected error occured.');
        console.log(error);
      }
    });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      }, error => {
        alert('An unexpected error occured.');
        console.log(error);
      });
    // this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        // console.log(response.json());
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          alert('An unexpected error occured.');
          console.log(error);
        }
      });
  }

}
