import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  
  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post));
  }
  
  updatePost(post, update){
    console.log(post, update , 'yo')
    return this.http.patch(`${this.url}/${post}`, JSON.stringify(update));
  }

  deletePost(post){
    return this.http.delete(`${this.url}/${post.id}`);
  }
}
