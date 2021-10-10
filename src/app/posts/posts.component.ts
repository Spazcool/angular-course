import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(
      (response: any) => {
        this.posts = response.slice(0, 3);
      }, 
      (error) => {
        console.log(error)
      }
    )
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        (response: any) => {
          post['id'] = response.id;
          this.posts.unshift(post);
        }, 
        (error) => {
          console.log(error)
        }
      )
  }

  updatePost(post){
    let update = {isRed: true};
    // input.value = '';
    this.service.updatePost(post, update)
      .subscribe(
        (response: any) => {
          console.log(response)
        }, 
        (error) => {
          console.log(error)
        }
      )
  }

  deletePost(post){
    this.service.deletePost(post)
    .subscribe(
      (response: any) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      (error) => {
        console.log(error)
      }
    )
  }
}
